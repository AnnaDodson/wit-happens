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
  moneyTotal = m;
  outgoings = 80;
  this.getMoney = function(){
    return moneyTotal;
  };
  this.decreaseMoney = function(m){
    moneyTotal = moneyTotal - m;
  };
  this.increaseMoney = function(m){
    moneyTotal = moneyTotal + m;
  };
};

function getMonthlyExtraCosts(){
  var moneyLeftTotal = 0;
  var answers = score.getAnswers();
  var questions = score.getQuestions();
  for (var i = 0; i < answers.length; i++){
      answer = answers[i];
      questionCalculation = questions[i];
      var monthlyPaid = answer.getMoneyLeftToPay();
      //update the time to take away the montly paid
      var timeRemaining = (answer.getTime() - score.getMonths());
      answer.setMoneyLeftToPay(monthlyPaid);
      moneyLeftTotal = moneyLeftTotal + questionCalculation.calculation(monthlyPaid, timeRemaining);
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

function updateMoneys(){
  money.decreaseMoney(getMonthlyOutgoings());
  money.increaseMoney(getMonthlyIncomings());
}

//Gets the answer obj and creates it
function setAnswer(ans){
  var question = score.getQuestion();
  var total = question.getPrice(ans);
  var monthlyCosts = Math.round(question.monthlyRepayment(ans));
  var time = question.paymentDuration;
  var moneyLeft = Math.round(question.calculation(monthlyCosts, time));

  var answer = new question.answer(total, monthlyCosts, time, moneyLeft);

console.log(answer);

  return answer;
}
