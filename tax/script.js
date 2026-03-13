function calculateTax(){

let name=document.getElementById("name").value
let income=parseFloat(document.getElementById("income").value)
let investment=parseFloat(document.getElementById("investment").value)

if(isNaN(investment)){
investment=0
}

let taxableIncome=income-investment
let tax=0

if(taxableIncome<=250000){
tax=0
}

else if(taxableIncome<=500000){
tax=taxableIncome*0.05
}

else if(taxableIncome<=1000000){
tax=taxableIncome*0.20
}

else{
tax=taxableIncome*0.30
}

document.getElementById("result").innerHTML=

"Name: "+name+"<br>"+
"Taxable Income: ₹"+taxableIncome+"<br>"+
"Total Tax: ₹"+tax

}