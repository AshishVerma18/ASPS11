let num=2345;
let reversed_number = 0;
while(num != 0){
        reversed_number *= 10;
		reversed_number += num % 10;
		num = num-num % 10;
		num = num/10;
		

}
console.log(reversed_number);