# _Pizza Place_

#### By _**Jason Macie**_
##### _Last Updated April 26th, 2020_

## Description

_This is a small page that holds data inside of pizza objects. The user should be able to choose toppings and size of those objects and a correct price should be displayed in relation to those options._

## Setup/Installation Requirements

* Clone this repository.
* Navigate to index.html file.
* Right click and open in the browser of your choice.

## Specs

### MVP
* Allow the user to choose toppings they'd like on their pizza.

* There is a pizza object that stores topping and price data. Then use this object in the rest of your code. The size would be one value per pizza, but the toppings attribute could be different in size based on user-input.
  Object attributes: size, toppings []

* Have a formula that you can referense to determine the price of the selected pizza.
  Formula: price = size + (x * 1) + (y * 2)
    x represents 'cheap' toppings. y represents slightly more expensive toppings.
  Input: small pizza with pepperoni(x), olives(y), and artichoke hearts(y)
  Output: 7 + (1 * 1) + (2 * 2) = "$12"

### Additional Work
* Style site with css and images.
* Allow users to pick how much of the pizza is covered with a particular topping.
* Allow user to order more than one pizza with different toppings.
* Display the list of pizzas ordered as links that can be clicked for details.
* Offer a delivery option that then requires address information.

### License

This software is licensed under the MIT license.

Copyright (c) 2020 **Jason Macie**