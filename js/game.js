function Score(q){
  var questionNumber = q;
  var questions = events;
  var score = 0;
  var answers = [];
  var months = 0;
  this.getQuestion = function(){
    return questions[questionNumber];
  };
  this.getQuestions = function(){
    return questions;
  };
  this.getAnswer = function(){
    return questions[questionNumber].Answer;
  };
  this.nextQuestion = function(){
    questionNumber = questionNumber + 1;
  };
  this.isLastQuestion = function(){
    if (questionNumber + 1 < questions.length ){
      return false;
    }
    else {
      return true;
    }
  };
  this.getScore = function(){
    return score;
  };
  this.reduceScore = function(s){
    score = score - s;
  };
  this.increaseScore = function(s){
    score = score + s;
  };
  this.addAnswer = function(ans){
    answers.push(ans);
  };
  this.getAnswers = function(){
    return answers;
  };
  this.getMonths = function(){
    return months;
  };
  this.increaseMonth = function(){
    months = months + 1;
  };
}

function Money(m){
  moneyTotalAmount = 0;
  moneyTotalSpend = 0;
  moneyTotalIn = 0;
  this.getMoney = function(){
    return moneyTotalAmount;
  };
  this.decreaseMoney = function(m){
    moneyTotalAmount = moneyTotalAmount - m;
  };
  this.increaseMoney = function(m){
    moneyTotalAmount = moneyTotalAmount + m;
  };
  this.setTotalSpend = function(m){
    moneyTotalSpend = moneyTotalSpend + m;
  };
  this.getTotalSpend = function(){
    return moneyTotalSpend;
  };
  this.setTotalIn = function(m){
    moneyTotalIn = moneyTotalIn + m;
  };
  this.getTotalIn = function(){
    return moneyTotalIn;
  };
};

//get the extra costs set by the user
function getMonthlyExtraCosts(){
  var moneyLeftTotal = 0;
  var answers = score.getAnswers();
  var quests = score.getQuestions();
  for (var i = 0; i < answers.length; i++){
      answer = answers[i];
      questionCalculation = quests[i];
      var monthlyPaid = answer.getMoneyLeftToPay();
      //update the time to take away the montly paid
      var timeRemaining = (answer.getTime() - score.getMonths());
      if (timeRemaining > 0){
        answer.setMoneyLeftToPay(monthlyPaid);
        moneyLeftTotal = moneyLeftTotal + questionCalculation.calculation(monthlyPaid, timeRemaining);
      }
  }
  return moneyLeftTotal;
}

//get how much money comes out each month
function getMonthlyOutgoings(){
  var monthlyOutgoing = 0;
  for (var cost in outgoings) {
    if (outgoings.hasOwnProperty(cost)) {
      console.log(cost + " -> " + outgoings[cost]);
      monthlyOutgoing = monthlyOutgoing + outgoings[cost];
    }
  }
  return monthlyOutgoing;
}

//get how much money comes in each month
function getMonthlyIncomings() {
  var monthlyIncomings = 0;
  for (var cost in incomings) {
    if (incomings.hasOwnProperty(cost)) {
      console.log(cost + " -> " + incomings[cost]);
      monthlyIncomings = monthlyIncomings + incomings[cost];
    }
  }
  return monthlyIncomings;
}

//get how much extra money comes in each month
function getExtraMonthlyIncome(){
  return 0;
}

function setChallenge(){
  //get challenge from the list
  //good or bad?
  //add to increase or decrease
  //reset
}

function updateMoneys(){
  var spent = getMonthlyOutgoings() + getMonthlyExtraCosts();
  money.setTotalSpend(spent);
  money.decreaseMoney(spent);

  var moneyIn =  getMonthlyIncomings() + getExtraMonthlyIncome() ;
  money.setTotalIn(moneyIn);
  money.increaseMoney(moneyIn);
}

//Gets the answer obj and creates it
function setAnswer(ans){
  var question = score.getQuestion();
  var total = question.getPrice(ans);
  var monthlyCosts = Math.round(question.monthlyRepayment(ans));
  var time = question.paymentDuration;
  var moneyLeft = Math.round(question.calculation(monthlyCosts, time));
  var answer = new question.answer(total, monthlyCosts, time, moneyLeft);

  return answer;
}
