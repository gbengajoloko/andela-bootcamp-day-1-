var exports=module.exports={};
exports.dataTypes= function (input){
	if (input==null){
		return 'no value'
	}
	else if(typeof input==="boolean"){
		return input
	}
	else if(typeof input==="number"){
		if (input>100){
			return 'more than 100';
        
		}
		else if(input<100){
			return 'less than 100';

		}
		else{
			return 'equal to 100';
		}
	}
	else if(Array.isArray(input)){
		return input[2]
	}
	else if(typeof input==="string"){
		return input.length;
	}
	else if(typeof input==="function"){
		return input(true);
	}
}