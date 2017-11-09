//back-end

function YourPizza(size) {
 this.size = size;
 this.toppings = [];
 this.price = [];
 };

  YourPizza.prototype.calculatePrice = function() {
    var price = 0;
    if (this.size === 'personal ($9)') {
     return price = 9 + this.toppings.length;
    }
    if (this.size === 'medium ($13)') {
     return price = 13 + this.toppings.length;
    }
    if (this.size === 'big bambino! ($18)') {
     return price = 18 + this.toppings.length;
   }
  }



//front-end
$(document).ready(function() {

  $("#how-you-like-it").submit(function(event) {
    event.preventDefault();
      var size = $("#size").val();

      $(".size").text(size);

      var customerPizza = new YourPizza(size, toppings)

    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      var allYourToppings = $(this).val();
      $(".toppings").append(allYourToppings + " ");
      customerPizza.toppings.push(allYourToppings);
    });

    var totalPrice = customerPizza.calculatePrice()

    $("#show-your-order").show();
    $(".total-price").text(totalPrice);
  });
});
