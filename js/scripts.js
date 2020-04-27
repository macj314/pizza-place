function Orders(){
  this.orders = [];
  this.orderNumber = 0;
}

Orders.prototype.newOrder = function(pizza){
  this.orders.push(pizza);
  console.log(this.orders);
}

function Pizza(size){
  this.size = size;
  this.toppings = [];
}

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

let orders = new Orders();
$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
    let inputSize = parseInt($("input:radio[name=size]:checked").val());
    let pizza = new Pizza(inputSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizza.toppings.push($(this).val());
    });
    orders.newOrder(pizza);
    console.log(pizza);
    $("#pizza-list").show();
    // if (isNaN(inputSize) === true){
    //   $("#price-output").text("Please select a size for your pizza!");
    // } else {
    //   $("#price-output").text("$" + pizza.priceCalculator());
    // }
  })
})