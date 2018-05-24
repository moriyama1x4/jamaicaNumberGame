var target = 22;
var sign = ['+','-','*','/','\\'];

for(var i = 0; i < 4; i++){
	for(var j = i+1; j < 5; j++){
		for(var k = 0; k < 5; k++){
			for(var l = 0; l < 3; l++){
				for(var m = l+1; m < 4; m++){
					for(var n = 0; n < 5; n++){
						for(var o = 0; o < 2; o++){
							for(var p = o+1; p < 3; p++){
								for(var q = 0; q < 5; q++){
									for(var r = 0; r < 5; r++){
										var nums = [1,2,4,5,0];
										var formulas = [];
										nums.forEach(function(value){
											formulas.push(value);
										});
										
										var num1_1 = nums[i];
										nums.splice(i,1);
										var num1_2 = nums[j-1];
										nums.splice(j-1,1);
										nums.unshift(cal(num1_1, num1_2, k));
										
										var num2_1 = nums[l];
										nums.splice(l,1);
										var num2_2 = nums[m-1];
										nums.splice(m-1,1);
										nums.unshift(cal(num2_1, num2_2, n));
										
										var num3_1 = nums[o];
										nums.splice(o,1);
										var num3_2 = nums[p-1];
										nums.splice(p-1,1);
										nums.unshift(cal(num3_1, num3_2, q));
										
										var result = cal(nums[0], nums[1], r);
										
										if(result == target){
											var formula1_1 = formulas[i];
											formulas.splice(i,1);
											var formula1_2 = formulas[j-1];
											formulas.splice(j-1,1);
											formulas.unshift('(' + formula1_1 + sign[k] + formula1_2 + ')');
												
											var formula2_1 = formulas[l];
											formulas.splice(l,1);
											var formula2_2 = formulas[m-1];
											formulas.splice(m-1,1);
											formulas.unshift('(' + formula2_1 + sign[n] + formula2_2 + ')');
												
											var formula3_1 = formulas[o];
											formulas.splice(o,1);
											var formula3_2 = formulas[p-1];
											formulas.splice(p-1,1);
											formulas.unshift('(' + formula3_1 + sign[q] + formula3_2 + ')');
											
											var formula = formulas[0] + sign[r] + formulas[1];
											console.log(formula + '=' + target);
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function cal(num1, num2, sign){
	switch(sign){
		case 0:
			return num1 + num2;
		case 1:
			if(num1 >= num2){
				return num1 - num2; 
			}else{
				return num2 - num1;
			}
		case 2:
			return num1 * num2;
		case 3:
			return num1 / num2;
		case 4:
			return num2 / num1;
	}
}