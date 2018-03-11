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
		"interest": [0,0.05,0.1], //interest per year
		"calculation":	function(a, t){
				return a - 10;
			},

    "monthlyRepayment": // input: answer element, return monthly repayment
        function(a){

                if (event.newCar.interest[a] != 0) {
                        i = event.newCar.interest[a]/12.;
                        n = event.newCar.paymentDuration;
                        D = (((1+i)**n)-1)/(i*(1+i)**n);
                        A = event.newCar.price[a]-event.newCar.upfront[a];
                        P = A/D
                }
                else {P = 0}

                return  P;
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

var outgoings = {
  rent : 80,
  water : 20,
  gas : 20,
  electric : 30,
  demotion : 10,
  newRoof : 30
};

var incomings = {
  wages : 80,
  newJob : 20,
  promotion : 40
};
