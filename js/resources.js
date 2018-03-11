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
		"prompt" : "Hey! Look at my fancy new car!"
		"question":"You really like Jones' new car and want to stop taking the bus. What do you do?",
		"answerOptions": [
       { name : "A. Spend £1000 on buying a second hand car outright", value:  1},
       { name : "B. Spend £5000 and buy a car on finance", value:  5},
       { name : "C. Spend £10,000 and buy a car that is way better than Jones', on finance", value:  10}],
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
    "title" : "new-TV",
    "question":"Your TV breaks, what do you do?",
    "answerOptions": [
       { name : "first ans", value:  1},
       { name : "second ans", value:  5},
       { name : "third ans", value:  10}],
    "price": [100,350,750],
    "getPrice": function(i){
      return this.price[i];
    },
    "upfront": [100,100,100],
    "interest": [0,0.075,0.15], //interest per year
    "calculation":  function(a, t){
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
    "paymentDuration": 24, //months
    "notes":["yay","boo","really boo"],
    "answer" : Answer
  },
	 {
    "title" : "new-blah ",
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
	},


	 {
    "title" : "credit-card-application",
		"prompt": "I've got a great cash back credit card from Amex."
		"question":"Your last two credit card application got declined, what are your next steps?",
		"answerOptions": [
       { name : "A. Apply for an Amex credit card", value:  10},
       { name : "B. Apply for an M&S credit card, it might be easier to get", value:  5},
       { name : "C. Contact Experian to get your credit report and understand your credit history", value:  1}],
		"price": [0,0,0],
		"getPrice": function(i){
      return this.price[i];
    },
		"upfront": [0,0,0],
		"interest": [0,0,0], //interest per year
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
		"notes":["Bad","No, it won't be easier to get","Great! You need to understand your credit history."],
    "answer" : Answer
	},

	 {
    "title" : "night-out",
		"question":"You're short of money this month, but you really want to go out and have fun with your mates. What do you do?",
		"prompt" : "Oh, shame about your boiler breaking down. See you at the big night out on Saturday!",
		"answerOptions": [
       { name : "A. Skip the big night out, you'll see them all again the week after.", value:  1},
       { name : "B. Go out and delay paying your mobile bill again.", value:  5},
       { name : "C. Go out and use your credit card, hoping it won't max out.", value:  10}],
		"price": [0,0,0],
		"getPrice": function(i){
      return this.price[i];
    },
		"upfront": [0,0,0],
		"interest": [0,0,0], //interest per year
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
		"notes":["Well done!","Bad, missing payments is bad for your credit score","Bad, reaching your credit limit is very bad!"],
    "answer" : Answer
	},
  {
    "title" : "voterReg",
    "prompt" : "So, you moved house a while ago"
    "question":"Did you register to vote??",
    "answerOptions": [
       { name : "first ans", value:  1},
       { name : "second ans", value:  5},
    "price": [0,0],
    "getPrice": function(i){
      return this.price[i];
    },
    "upfront": [0,0],
    "interest": [0,0], //interest per year
    "calculation":  function(a, t){
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
    "notes":["yes you registered!","not registering gives you poor credit rating"],
    "answer" : Answer
  },
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
