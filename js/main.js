var time = 9000;
var gameTimer;
var isPaused = false;
var money;
var score;

//set scores
function setScoresUI(month, creditScore, money){
  $('#stat-day').text(month);
  $('#money').text(money);
  $('#score').text(creditScore);
 }

//set questions
function setQuestionUI(q){
  $('#question').text(q);
}

//set user options
function setAnswersUI(a){
  $('#answers').empty();
  var output = "";
  for (var i = 0; i < a.length; i++){
    var html = "<span><input type='radio' name='answer' data-id='" + i + "' value='" + a[i].name + "'>" + a[i].name + "</span>";
    output = output + html;
  }
  $('#answers').append(output);
}

//get user input
$('#answers').change(function(){
  var value =  $("input[name='answer']:checked").attr("data-id");
  onAnswerChange(value);
});

function updateUI(){
  var nextQuestion = score.getQuestion();
  setQuestionUI(nextQuestion.question);
  setScoresUI( score.getMonths(), score.getScore(), money.getMoney() );
  setAnswersUI( nextQuestion.answerOptions );
}

function gameTick() {
    console.log("tick");
    //update the month ++
    score.increaseMonth();

    //update monthly bits
       updateMoneys();
       //get extra purchases costs
       getMonthlyExtraCosts();
 
    //update the ui updates the money
    updateUI();
}

function gameStart() {
    money = new Money(100);
    score = new Score(0);
    updateUI()
    gameTimer = setInterval(function(){
       if(!isPaused) {
         gameTick();
       }
     }, time);
}

function onAnswerChange(ans){
  //pause the tick
  isPaused = true;


  //create the asnwer and add to array
  var answer = setAnswer(ans)
  score.addAnswer(answer);
  
  //get the total money for the answers and add to monthly expeditures
  var monthlyOutgoings = (getMonthlyExtraCosts() + getMonthlyOutgoings());
  money.decreaseMoney(monthlyOutgoings);

  //Get the monthly incomings to add into the money pot
  var monthlyIncomings = getMonthlyIncomings();
  money.increaseMoney(monthlyOutgoings);

  //update the scores
  score.increaseScore(30);

  //go to the next question
  score.nextQuestion();


  //update the scoreboard
  updateUI();

  //resume the tick
  isPaused = false;
}

$(document).ready(function(){
  gameStart();
});
