// We need a function that can transform a string into a number. 
// Number()	   :Returns a number, converted from its argument
// parseFloat():Parses a string and returns a floating point number
// parseInt()	 :Parses a string and returns an integer
const stringToNumber = function(str){
  
    // num=parseFloat(str);           
    num = + str                   // it can also ne done this way
    return num;
  }
   console.log(stringToNumber("7"))

  //  The unary + operator can be used to convert a variable to a number:  
   let y = "5";      // y is a string
   let x = + y;  
   console.log(x)
   // if it cant convert it still return a number , but with the value NaN.
   let a= "sneha";
   let b=+a;
   console.log(b)

   // CONVERT NUMBER TO STRING
   // String () it converts all
   //.toString  also do the same

   let number =123
   string=String(number)
   console.log(string)


   //Converting Dates to Numbers
   let date = new Date();
   z=Number (date);
   console.log(date)
   console.log(z)
   // we can convert date also in string using .toString
   

