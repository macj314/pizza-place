function Pizza(size){
  this.size = size;
  this.toppings = [];
}

//Take in an array of toppings and coverage, and push those toppings as key value pairs to this.toppings
//Push a toppings coverage number to this.toppings
//each push should look like: this.toppings.push([topping: string, coverage: 1]);
// Pizza.prototype.addToppings = function(inputT){
//     this.toppings.push(inputT);
// }

Pizza.prototype.priceCalculator = function(){
  let price = this.size;
  let cheapToppings = ["pepperoni", "spinach", "pineapple", "jalapenos"];
  let expensiveToppings = ["artichoke", "olives", "beef"];
  for(i = 0; i < this.toppings.length; i++){
    for(j = 0; j <= 4; j++){
      if(this.toppings[i].includes(cheapToppings[j])){
        price += 1;
      } else if (this.toppings[i].includes(expensiveToppings[j])){
        price += 2;
      }
    }
  }
  return price;
}

$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    let inputSize = parseInt($("input:radio[name=size]:checked").val());
    console.log(inputSize);
    let pizza = new Pizza(inputSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizza.toppings.push($(this).val());
    });
    console.log(pizza);
    if (isNaN(inputSize) === true){
      $("#price-output").text("Please select a size for your pizza!");
    } else {
      $("#price-output").text("$" + pizza.priceCalculator());
    }
  })
})