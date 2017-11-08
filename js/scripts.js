//back-end

function YourPizza(yourSize, yourToppings, yourPrice) {
 this.size = yourSize;
 this.toppings = yourToppings;
 this.price = yourPrice;
 }

  var pizza = new YourPizza("#size", ["#toppings"])

  YourPizza.prototype.calculatePrice()
  if yourPizza.yourSize === 'personal ($9)' {
    yourPizza.price = 9 + yourToppings.length;
  }
  else if yourPizza.yourSize === 'medium ($13)' {
    yourPizza.price = 13 + yourToppings.length;
  }
  else if yourPizza.yourSize === 'big bambino! ($18)' {
    yourPizza.price = 18 + yourToppings.length;
  };







//front-end
$(document).ready(function() {

  $("#how-you-like-it").submit(function(event) {
    event.preventDefault();
      var yourSize = $("#size").val();

      $(".size").text(yourSize);

    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var allYourToppings = $(this).val();
      $(".toppings").append(allYourToppings + " ");
    });


    $("#show-your-order").show();
    $(".total-price").text(YourPizza.yourPrice.toString());
  });
});
