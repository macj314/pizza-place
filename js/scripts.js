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

Pizza.prototype.priceCalculator = function(pie){
  let price;
  let cheapToppings = "pepperoni spinach pineapple jalapenos";
  let expensiveToppings = ["artichoke", "olives", "beef"];
  price += pie.size;
  for(i = 0; i < pie.toppings.length; i++){
    if(pie.toppings[i].includes(cheapToppings)){
      price += 1;
    } else if (pie.toppings[i].includes(expensiveToppings)){
      price += 2;
    }
  }
  return price;
}

$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    // let inputToppings = $("input:checkbox[name=toppings]:checked").val;
    // console.log(inputToppings);
    let inputSize = $("input:radio[name=size]:checked").val();
    console.log(inputSize);
    let pizza = new Pizza(inputSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizza.toppings.push($(this).val());
      console.log(pizza);
    });
    console.log(pizza);
  })
})