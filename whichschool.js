//Elementary School if age is below 13
//Secondary School if age is between 13 and 18 (both inclusive)
//Lighthouse Labs in all other cases.


const whichSchool  = function (age) {
  // Your code in here ...
  if(age < 13){
    return "Elementary School";
  }
  else if(age >= 13 && age <= 18){
    return "Secondary School";
  }
  else if(age > 18){
    return "Lighthouse Labs";
  }
}

let decision = whichSchool(19);
console.log(decision);