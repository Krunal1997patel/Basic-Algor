//1) Print 1-255
//Print	all	the	integers	from	1	to	255
function print1To255(){
    for(let i = 1; i <= 255; i++){
        console.log(i);
    }
}

//Print	integers	from	0	to	255,	and	with	each	integer	print	the	sum	so	far.
function printIntAndSum0To255(){
    let sum = 0;
    //loop thought 0 to 255
    for(let i = 0; i <= 20; i++){
        //print 0 to 255
        console.log('This is the Int'+ i);
        //print the sum soo far
        console.log(sum+= i);
    }
}

//Given	an	array,	find	and	print	its	largest	element.
	
function returnMaxOfArray(arr){
    //number tracker
    let largerNumbeer = 0;
    //loop throught all the array number
    for(let i = 0; i < arr.length; i++){
        //check if that num,ber is bigger the tracker
        if(largerNumbeer < arr[i]){
            largerNumbeer = arr[i];
        }
    }
    //return that tracker;
    console.log(largerNumbeer);
} 

//Given	an	array,	move	all	values	forward	(to	the	left)	by	one	index, dropping	the	first	value	and	leaving	a	0	(zero)	value	at	the	end	of	the array.
function shiftArrayValsLeft(arr){
    //store the array
    let changeArray = arr
    //then shift the array
    changeArray.shift();
    //then push 0 in end
    changeArray.push(0);
    //return that array
    console.log(changeArray)
}

//Return	the	given	array,	after	setting	any	negative	values	to	zero.
	
function zeroOutArrayNegativeVals(arr){
    //store the array
    let noNegative = arr;
    //loop thought the given array
    for(let i = 0; i < arr.length; i++){
        //checck if the arry has any value below 0
        if(arr[i] < 0 ){
            //if it does change it to 0
            arr[i] = 0;
        }
    }
    //return the new array
    console.log(noNegative);
}

//Square	each	value	in	a	given	array,	returning	that	same	array	with changed	values
function squareArrayVals(arr){
    //store the array
    let squareNumber = [];
    //loop thought the array
    for(let i = 0; i < arr.length; i++){
        //square all the array number by diving by 2
       squareNumber.push( arr[i] / 2);
    }
    //return the new array 
    console.log(squareNumber);
}

//Analyze	an	array’s	values	and	print	the	average.

function printAverageOfArray(arr){
    //store the values as it incress
    let average = 0;
    //loop thought the arr
    for(let i = 0; i < arr.length; i++){
        //add each number up and store it
        average+= arr[i]; 
    }
    //return the total value and divi it by the length of the arr
    return average/arr.length;
}

//Iterate	through	a	given	array,	printing	each	value
function printArrayVals(arr){
    //loop thought each arry
    for(let i = 0; i < arr.length; i++){
        //print them
        console.log(arr[i]);
    }
}

//Print	all	odd	integers	from	1	to	255.

function printOdd1To255(){
    //make a loop that go from 1 to 255
    for(let i = 1; i <= 255; i++){
        //print only the odd number
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

//Given	an	array	and	a	value	Y,	count	and	print	the	number	of	array	values greater	than	Y.
    
function returnArrayCountGreaterthanY(arr, y){
    //store the array that is bigger then Y
    let bigNumberThenY = [];
    //loop thought the array
    for(let i = 0; i < arr.length; i++){
        //check if the number is bigger the Y
        if(y < arr[i]){
            //push that number in new array
            bigNumberThenY.push(arr[i]);
        }
    }
    //return new array with values bigger then Y
    console.log(bigNumberThenY);
}

//Given	an	array,	print	the	max,	min	and	average	values	for	that	array

function printMaxMinAverageArrayVals(arr){
    //make empty var that will store max, min , and average
    let max  = 0;
    let min = 0;
    let average = 0;
    //check what is max in array
    max = Math.max(...arr);
    //cheak what is min in array
    min = Math.min(...arr);
    //loop thought the array to find the max, min and average
    for(let i = 0; i < arr.length; i++){
        //find the average of the array
        average+= arr[i];
    }
    //return max, min, array
    console.log(average/arr.length, max, min);

}

//Given	an	array	of	numbers,	replace	any	negative	values	with	the	string 'Dojo'.

function swapStringForArrynegativevals(arr){
    //store the array
    let negativeToString = arr;
    //loop thought the given array
    for(let i = 0; i < arr.length; i++){
        //checck if the arry has any value below 0
        if(arr[i] < 0 ){
            //if it does change it to 0
            arr[i] = 'Dojo';
        }
    }
    //return the new array
    console.log(negativeToString);
}

