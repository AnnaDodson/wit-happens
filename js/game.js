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

function Money(){
  money = 100;
  outgoings = 80;
  this.getMoney = function(){
    return money;
  };
  this.decreaseMoney = function(m){
    money = money - m;
  };
  this.increaseMoney = function(m){
    money = money + m;
  };
};

function startUI(){
  console.log("starting the ui");
}

function updateUI(){
  console.log("updating the ui");
}

function getMonthlyExtraCosts(){
  var moneyLeftTotal = 0;
  var answers = score.getAnswers();
  var questions = score.getQuestions();
  for (var i = 0; i < answers.length; i++){
      answer = answers[i];
      questionCalculation = questions[i];
      var monthlyPaid = answer.getMoneyLeftToPay();
      answer.setMoneyLeftToPay(monthlyPaid);
      moneyLeftTotal = moneyLeftTotal + questionCalculation.calculation(monthlyPaid, timeRemaining);
  }
  return moneyLeftTotal;
}

function getMonthlyOutgoings(){
  for (var cost in outgoings) {
    if (outgoings.hasOwnProperty(cost)) {
      console.log(cost + " -> " + outgoings[cost]);
    }
  }
  return 1;
}

function getMonthlyIncomings() {

}

function setAnswer(ans){
  var question = Score.getQuestion()
  var total = question.total();
  var monthlyCosts = question.monthlyCost();
  var time = question.time();
  var moneyLeft = question.moneyLeft();
  var answer = new score.getAnswer(total, monthlyCost, time, moneyLeft);
  return answer;
}
