 var totalPrice;
 var number;
 

 
 $(document).ready(function(){
 $("#btn").click(function(){
  var pizzaCrust = $("#pcrust option:selected").text();
  
  var pizzaSize = $("#psize option:selected").text();

  var pizzaTopping = $("#ptopping option:selected").text();
  
  number = $("#numbeR").val();

  //pizza constructor
  function Pizza(crust,size,topping,num){
   this.crust = crust;
   this.size = size;
   this.topping = topping;
   this.num = num;

  }
  //using new  keyword
  var order = new Pizza(pizzaCrust,pizzaSize,pizzaTopping,number)

  //prototype
  //gets crust price specifically
  Pizza.prototype.getCrustPrice = function(){
   
   if (this.crust == "Stuffed" ){
     return 100
     
  }
  else if(this.crust == "Crispy" ){
   return 200
  }
  else if(this.crust == "GluttenFree"){
   return 300

  }
  else {
   return "There is no such crust"
  }

  }
  console.log( order.getCrustPrice())
  //prototype 2

   Pizza.prototype.getSizePrice = function(){
   if (this.size == "Small"){
   return 500
   }
   else if (this.size == "Medium"){
    return 1000
   }
   else if(this.size == "Large"){
    return 1500
   }
   else{
    return " No such Size"

   }
   

  }
 
  //prototype3
  Pizza.prototype.getToppingPrice = function(){
   if(this.topping == "Mushrooms"){
    return 600
   }
   else if (this.topping == "Vegetables"){
    return 900
   }
   else if(this.topping == "Pepperoni"){
    return 1200
   }
   else{
    return "There is no such topping"
   }

  }
totalPrice = (order.getSizePrice() + order.getCrustPrice() + order.getToppingPrice())*number
$("#paragraph").empty().append(totalPrice)






  })

})

//function buttons
function functionbtnY(){
 alert ("Delievery cost is 200")
 prompt ("where do you want it delivered to?")
 alert ( "Your total  is:" +(200+totalPrice)  )

}
function  functionbtnN(){
alert ("Your total  is:" + totalPrice )
}

//form
$(document).ready(function(){
 $ ("#checkOut").click(function(){
   $("#numP").val(number);
   $("#totalP").val(totalPrice);

 })

$ ("#checkOut").click(function(){
let name = prompt("Your Name")
alert("Thanks for shopping with us " + name )
})




})
 

