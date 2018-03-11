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
  this.setTimeLeft = function(){
    time = time-1;
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
		"answerOptions": [
       { name : "first ans", value:  1},
       { name : "second ans", value:  5},
       { name : "third ans", value:  10}],
		"price": [1000,5000,10000],
		"getPrice": function(i){
      return this.price[i];
    },
		"upfront": [1000,0,0],
		"interest": [0,0.05,0.1], //interest per year
		"calculation":	function(a, t){
				return a - 10;
			},

    "monthlyRepayment": // input: answer element, return monthly repayment
        function(a){

                if (this.interest[a] != 0) {
                        i = this.interest[a]/12.;
                        n = this.paymentDuration;
                        D = (((1+i)**n)-1)/(i*(1+i)**n);
                        A = this.price[a]- this.upfront[a];
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
		"answerOptions": [
       { name : "first ans", value:  1},
       { name : "second ans", value:  5},
       { name : "third ans", value:  10}],
		"price": [1000,5000,10000],
		"getPrice": function(i){
      return this.price[i];
    },
		"upfront": [1000,0,0],
		"interest": [0,0.05,0.1], //interest per year
		"calculation":	function(a, t){
				return a - 10;
			},

    "monthlyRepayment": // input: answer element, return monthly repayment
        function(a){

                if (this.interest[a] != 0) {
                        i = this.interest[a]/12.;
                        n = this.paymentDuration;
                        D = (((1+i)**n)-1)/(i*(1+i)**n);
                        A = this.price[a]- this.upfront[a];
                        P = A/D
                }
                else {P = 0}

                return  P;
        },
		"paymentDuration": 36, //months
		"notes":["yay","boo","really boo"],
    "answer" : Answer
	}
];

var outgoings = {
  rent : 500,
  water : 12,
  gas : 18,
  electric : 20,
  gym : 16,
  travel : 50,
  mobile : 18,
  foodAtHome : 200,
  eatingOut : 120,
};

var incomings = {
  wages : 1000
};
