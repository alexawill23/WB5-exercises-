function isOver60(arrayValue) {
    if (arrayValue > 60) {
    return true;
    }
    else {
    return false;
    }
   }
   //same as the above, just shorter 
   function isOver60(arrayValue){
    return(arrayValue > 60)
   }
   let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
   let firstValOver60 = numbers.find(isOver60); // returns 64
   if (firstValOver60 != undefined) {
    console.log(firstValOver60);
   }
   else {
    console.log("No values over 60");
   }
   