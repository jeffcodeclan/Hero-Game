var Hero = function(name, health, favfood){
  this.name = name;
  this.health = health;
  this.favfood = favfood;
  // this.talk = talk
}

var Food = function(type, value){
  this.type = type;
  this.value = value;
}

Hero.prototype = {
  talk: function(){
    console.log("Hello my name is " + this.name);
  },
  eat: function(food){
    return(this.health += food.value)
  }
}  


var bob = new Hero( 'bob', 100, 'corn');
var pizza = new Food( 'pizza', 100);
console.log(bob.talk());
console.log(bob.eat(pizza));
