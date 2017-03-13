function food(name,protein,price,quantity){//main class named food
	this.name=name;
	this.protein=protein;
	this.price=price;
	this.quantity=quantity;

}
food.prototype.information=function(){
	return  "we have " + this.quantity + " plates of " + this.name
}
food.prototype.buy= function(num){
	if (num<=this.quantity){
		this.quantity=this.quantity-num
		return  this.quantity +" plates left"
	}
	else {
		return "not enough"
	}
}
// african class dishes like eba fufu ets that inherits from food
function african(name,protein,price,quantity,soup){
	food.call(this, name, protein, price, quantity)
	this.soup=soup
}


african.prototype=new food();
//overides the information method of food in african dishes
african.prototype.information=function(){
	return "we have " + this.quantity + " plates of " + this.name +" with "+ this.soup 
}
//continental dishes like fried rice,joloaf rice etc that inherits from food
//buyer gets free drink for each order of cont
function cont(name,protein,price,quantity){
	food.call(this, name, protein, price, quantity);
	this.drink="orange juice" 
}
cont.prototype=new food();

module.exports = {
    african: african,
    cont:cont,
    food:food
}