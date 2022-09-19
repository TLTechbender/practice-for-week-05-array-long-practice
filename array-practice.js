const findMinimum = arr => {
  
   if(arr.length ===0){
    return undefined;
   }
	return Math.min(...arr);
  // Your code here
  //Time complexity = O(n)
};

const runningSum = arr => {
let sum = 0;
	  let sums = [];
	  for (let i = 0; i < arr.length; i++) {
	      sum += arr[i];
	      sums.push(sum);
	    }
	  return sums;

  //Time complexity = O(n);
};

const evenNumOfChars = arr => {
  let count =0;
	for(let i=0; i<arr.length; i++){
          let ele= arr[i];
        if(isEven(ele)){
          count++;
	 }		          
	}
  // Your code here
 // I don't really know about this one cos I wrote a helper function to help me out!!!!
	//
 // I think my function can be optimised, cos I wrote two functions my Time and space complexity should be = O(n^2);
return count;
};


function isEven(word){
if(word.length % 2 ===0 ){
return true;
}
return false;
}

const smallerThanCurr = arr => {
  let answer=[];
let count=0;
	for(let i=0; i<arr.length; i++){
          let particular = arr[i];

         for(let j=0; j<arr.length; j++){
            let comparitor=arr[j];
            
		 if(comparitor<particular){

                 count++;
		 }
         
            // Time complexity = O(n^2), I'm using double for loop that is iterating upon itself as it goes along; 
			
	 }
        answer.push(count);	
	count=0;
	}
	
  // Your code here
    return answer;
};

const twoSum = (arr, target) => {
   for(let i=0; i<arr.length; i++){
     let ele1=arr[i];
    for(let j=i+1; j<arr.length-1; j++){
     let ele2=arr[j];
     if(ele1 + ele2 === target){
       return true;
     }
    }
 // Time complexity = O(n^2), I'm using double for loop that is iterating upon itself as it goes along; 

   }
  // Your code here
return false;
};

const secondLargest = arr => {
  if(arr.length<=1){
   return undefined;
  }

	let firstL = Math.max(...arr);
     let indexing = arr.indexOf(firstL);
   arr.splice(indexing,1);

  // Time complexity = O(n)
   return Math.max(...arr);
  // Your code here
};

const shuffle = (arr) => {
   
  // Your code here
// I dont' know how to go about this at all and copying doesn't seem to vibe with me at the moment
	


};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
