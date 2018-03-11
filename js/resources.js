function Answer(t, m, ti, ml){
  var total = t;
  var monthlyCost = m;
  var time = ti;
  var moneyLeft = ml;
  this.getTotal = function(){
    return total;
  };
  this.getPerMonth = function(){
    return monthlyCost;
  };
  this.getTime = function(){
    return time;
  };
  this.getMoneyLeftToPay = function(){
    return moneyLeft;
  };
  this.setMoneyLeftToPay = function(sum){
    moneyLeft = moneyLeft - sum;
  };
}

var events = [
	 {
    "title" : "new-car",
		"question":"Which new car do you want?",
		"answer": [1,5,10],
		"price": [1000,5000,10000],
		"upfront": [1000,0,0],
		"interest": [0,1.05,1.1],
		"calculation":	function(a, t){
				return a - 10;
			},
		"paymentDuration": 36, //months
		"notes":["yay","boo","really boo"],
    "answer" : Answer
	},
	 {
    "title" : "new-blah",
		"question":"Which new thing do you want?",
		"answer": [1,5,10],
		"price": [1000,5000,10000],
		"upfront": [1000,0,0],
		"interest": [0,1.05,1.1],
		"calculation":	function(a, t){
				return a - 20;
			},
		"paymentDuration": 36, //months
		"notes":["yay","boo","really boo"],
    "answer" : Answer
	}
];

