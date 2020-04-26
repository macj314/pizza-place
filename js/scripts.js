function Pizza(size){
  this.size = size;
  this.toppings = [];
}

//Take in an array of toppings and coverage, and push those toppings as key value pairs to this.toppings
//Push a toppings coverage number to this.toppings
//each push should look like: this.toppings.push([topping: string, coverage: 1]);
Pizza.prototype.AddToppings = function(inputT){
  for (i = 0; i < inputT.length; i++){
    this.toppings.push(arrayT[i]);
  }
}

Pizza.prototype.priceCalculator = function(pizza){
  let price;
  let cheapToppings = "pepperoni spinach pineapple jalapenos";
  let expensiveToppings = ["artichoke hearts", "olives", "shredded beef"];
  price += this.size;
  for(i = 0; i < this.toppings.length; i++){
    if(this.toppings[i].includes(cheapToppings)){
      price += 1;
    } else if (this.toppings[i].includes(expensiveToppings)){
      price += 2;
    }
  }
  return price;
}