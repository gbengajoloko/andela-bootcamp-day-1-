(function (){
	"use strict";
	var african=require('../oopFood.js').african;
	var cont=require('../oopFood.js').cont;
	var food=require('../oopFood.js').food;

	describe("creates objects of class african or cont that inherits from food",function(){
		it("The dish should be a type of `object`, and an instance of the `african` class",function (){
			var amala = new african("amala","meat",50,10,"egunsi");
			expect(typeof amala).toEqual(typeof {});
			expect(amala instanceof african).toBeTruthy();
		})
		it("the dish name, protein ,price,soup and quantity shoild be a property of the dish",function (){
			var eba = new african("eba","beef",50,5,"egunsi");
			expect(eba.name).toEqual("eba")
			expect(eba.protein).toEqual("beef")
			expect(eba.quantity).toEqual(5)
			expect(eba.price).toEqual(50)
			expect(eba.soup).toEqual("egunsi")

		})
		it("it should return we have 5 plates of eba with egunsi soup for the input ",function (){
			var eba = new african("eba","meat",50,5,"egusi");
			expect(eba.information()).toEqual("we have 5 plates of eba with egusi")
		})
		it("if the user buys more than quantity available it should return `not enough`",function (){
			var eba = new african("eba","meat",50,5,"egunsi");
			expect(eba.buy(10)).toEqual("not enough")
		})
		it("the user buys 5 plates it should return quantity left",function(){
		    var eba = new african("eba","meat",50,6,"egunsi");
		    expect(eba.buy(5)).toEqual("1 plates left")
		})
		it("the dish should be a class of continental dish",function (){
			var friedrice = new cont("fried rice","beef",50,10);
			expect(typeof friedrice).toEqual(typeof {});
			expect(friedrice instanceof cont).toBeTruthy();
			expect(friedrice.protein).toEqual("beef")
		});
		it("it should return we have 20 plates of jollof rice for that input",function (){
			var jollofrice=new cont("jollof rice","chicken",5,20);
			expect(jollofrice.information()).toEqual("we have 20 plates of jollof rice")
		});
		it("there should return orange juice drink of continental dish",function(){
			var jollofrice=new cont("jollof rice","chicken",5,20);
			expect(jollofrice.drink).toBe("orange juice");

		})


	});

})();