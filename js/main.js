var time = 3000;
var myVar;

var money;
var score;

//set scores
function setScoresUI(scores){
  $('#stat-day').text(scores.score);
  $('#money').text(scores.money);
  $('#score').text(scores.score);
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
  console.log(value);
});


function gameTick() {
    console.log("tick");
    //update the ui updates the money
    updateUI();
}

function gameStart() {
    money = new Money();
    score = new Score(10);
    startUI();
    myVar = setInterval(function(){
      gameTick(money, score)}, time);
}

//start loop
//start ticker
//set question
//on answer, pause ticker
//update totals
//finsish loop
function onAnswer(ans){
  //pause the tick
  var answer = setAnswer(ans)
  score.answers.addAnswer(answer);
  
  //get the total money for the answers
  var monthlyOutgoings = getMonthlyExtraCosts(); // + monthly outgoings (bills etc)
  var o = getMonthlyOutgoings();
  //Get the expenditures to take away from money total
  //Get the monthly costs to take away from the money total
  money.decreaseMoney(monthlyOutgoings);

  //Get the monthly incomings to add into the money pot
  //var monthlyIncomings = getMonthlyIncomings();

  //resume the tick
}

$(function() {
    var e = $.Event('keypress');
    e.which = 65; // Character 'A'
    $('item').trigger(e);
});

$(document).ready(function(){
  setQuestionUI();
  setScoresUI({score: 30, money: 100});
  setQuestionUI("test question here");
  setAnswersUI([ { name : "one"},{ name: "two"},{ name : "three" } ]);
});
//gameStart();
