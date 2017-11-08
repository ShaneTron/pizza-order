//back-end


//front-end
$(document).ready(function() {

  $("#how-you-like-it").submit(function(event) {
    event.preventDefault();
      var yourSize = $("#size").val();

      $(".size").text(yourSize);

    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var allYourToppings = $(this).val();
      console.log(allYourToppings);
      $(".toppings").append(allYourToppings + " ");
    });


    $("#show-your-order").show();
  });
});
