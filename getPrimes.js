var exports = module.exports={};
exports.getPrimes = function (num) {
var arr= [];
     if(typeof num !== "number")
     {
         return "input is not a number";
     }
     if(num<=1)
     {
         return arr;
     }
     else
     {
         for(var k=2;k<=num;k++)
         {
             if (isPrime(k)=== true)
             {
                 arr.push(k);
             }
         }
     }
     return arr;
}
isPrime= function (n)
{
	var isprime=true;
	if (n<2)
	{
	     return false;
	}
    else
    {
         for (i=2;i<=Math.sqrt(n);i++)
         {
             if (n%i===0)
             {
                isprime=false;
             }
        }
    }
  return isprime ;
} 