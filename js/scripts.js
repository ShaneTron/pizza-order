//back-end

//function YourPizza(size, toppings) {
 //this.size = size;
 //this.toppings = toppings;
 //this.price = 0;
 //};

  //YourPizza.prototype.calculatePrice = function() {
  //  if (this.size === 'personal ($9)') {
    //  price = 9 //+ this.toppings.length;
    //}
    //if (this.size === 'medium ($13)') {
    //  price = 13 //+ this.toppings.length;
    //}
  //  if (this.size === 'big bambino! ($18)') {
    //  price = 18 //+ this.toppings.length;
    //}
    //return price;
  //}



//front-end
$(document).ready(function() {

  $("#how-you-like-it").submit(function(event) {
    event.preventDefault();
      var size = $("#size").val();

      $(".size").text(size);

    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      var toppings = $(this).val();
      $(".toppings").append(allYourToppings + " ");
    });

     //var customerPizza = new YourPizza(size, allYourToppings)
     //var totalPrice = customerPizza.calculatePrice()

    $("#show-your-order").show();
    //$(".total-price").text(price.toString());
  });
});
