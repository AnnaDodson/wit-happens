// This is the json for the question object
//

var event = {
	 newCar : {
		"question":"Which new car do you want?",
		"answer": [1,5,10],
		"price": [1000,5000,10000],
		"upfront": [1000,0,0],
		"interest": [0,1.05,1.1], //interest per year
		"recurring": function(b){
			return b;
		},
// ((price-upfront)*interest)/paymentDuration = monthly repayment
		"monthlyRepayment": // input: answer, return monthly repayment
			function(a){
// P = A/D
// D = (((1+i)**n)-1)/(i(1+i**n))
				//i = event.newCar.interest[a]/12.;
				//D = (1+i)

				return ((event.newCar.price[a]-event.newCar.upfront[a])
					*event.newCar.interest[a])/event.newCar.paymentDuration; 
			},
		"paymentDuration": 36, //months
		"notes":["yay","boo","really boo"],
	} // newCar
} // event

function getIsRecurring() {
	var t = event.newCar.recurring(true);
	console.log(t);
	
}
getIsRecurring();

function getMonthlyRepayment(){
	var t = event.newCar.monthlyRepayment(2);
	console.log(t);
}
getMonthlyRepayment();

function getReport(){
	var t = event.newCar.notes[2];
	console.log(t);
}
getReport();
