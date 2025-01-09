console.log("Hello Selamun aleykum this is my first Js code!");
let c;
let y;

c=5;
y=10;
var z=c+y;
console.log(z);

function my(){
    console.log("This is my function");
}

my();
 function adder(s,t){
    return s + t;  
 };

 function averag(s,t){
    var av=adder(s,t)/2;
    return av;
 }
 console.log(averag(4,7));

 function SecondToMin(m){
   if(isNaN(m)) return "please enter only number";
   if(m<0) return "please enter posetive number";
  
   let Sec=parseFloat(m)*60;
   return Sec;
 }
console.log("The total second is : "+ SecondToMin(5));

function my2stFunction(m){
   return m;
}
 
function my3stFunction(m){
   return my2stFunction(m);
}
console.log(my3stFunction("Hello"))

function my4stFunction(m){
   m=("1","Hello",'T');
   return m;
};
console.log(my4stFunction());

function sumOf(m){
   let sum=0;
   if (isNaN(m)) {
      return "Please enter only a number";
   }
   else if (m<0) {
      return "provide only a +ve numbers!";
   }
   for (let index = 0; index < m; index++) {
      sum = sum+index;
   }
   return sum;
}

console.log(sumOf(-5));

let myObject={
   name: "Kenenisa ",
   last_name: "Mieso" ,
   Full_name: function me() {
      return (this.name + this.last_name);
   }
};
console.log(myObject.Full_name());
let a;
function myArray(a) {
      a=["Kemi", "Peace", "Here", 5];
      return a;
}

console.log(myArray());

let ourDorm={
   name: "Coders Dorm",
   Floor:  "2nd",
   Number: 202,
   Enter: function toEnter(){
      return ("Please knock the door before you enter");
   },
   Out: function toOut() {
      return("Say Measelam when you out");
   },
   read: function toRead() {
      return ("Ask a permission ");
   }
}
let mt=ourDorm;
 console.log();

 function detector(m){
   let word="";
   for (let index = 0; index <m.length; index++) {
      var letter=m.charAt(index);
      if (letter == letter.toLowerCase()) {
         word=word+letter;
      }

   }
   return word;
 }
 console.log(detector("KEmLaTle"));

 function hiddenwords(Mystrings) {
   console.log("Mystring:" , Mystrings);
   let Sarray=Mystrings.split("");
   console.log("After conversion to arrays:", Mystrings);

   let hword=Sarray.filter(
      function (sLetter){
         return sLetter !== sLetter.toUpperCase()}
   );
   hword=hword.join("");

   return hword;

 }

 console.log(hiddenwords("elLTbRoPw"))

 function maxminDetect(m,n){
   //return maxArray1,minArray1;
   if (!(Array.isArray(m) && (Array.isArray(n)))) {
      return "Both values need to be array";
   }
   let Array1=m.sort();
   let Array2=n.sort();
   let maxArray1=Array1[m.length-1];
   let minArray1=Array1[0];
   let maxArray2=Array2[n.length-1];
   let minArray2=Array2[0];
   if ((minArray1 <= minArray2) || maxArray1 >= maxArray2) {
      return false;
   }
   else
   return true;

 }

 console.log(maxminDetect([1,3,5,6],4 ));


