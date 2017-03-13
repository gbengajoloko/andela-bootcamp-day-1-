  'use strict';
   var myapp=require('../getPrimes.js')
describe("get all prime numbers less than number", function (){
	it("it should return [1,2,3,5,7] for 10",function(){
		expect(myapp.getPrimes(10)).toEqual([2,3,5,7]);

	});
	it("it should return `input is not a number` for `boriya`",function(){
		expect(myapp.getPrimes("boriya")).toEqual("input is not a number");
	});
	it("it should return [] for 1", function(){
		expect(myapp.getPrimes(1)).toEqual([ ]);
	});
	it("it should return [ 2, 3, 5, 7, 11, 13, 17, 19] for 20", function(){
		expect(myapp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
	});
	it("it should return [2] for 2",function(){
		expect(myapp.getPrimes(2)).toEqual([2]);
	});
	it("it shoild return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30",function(){
		expect(myapp.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
	});
});