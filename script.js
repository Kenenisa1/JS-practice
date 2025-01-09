// let l=document.getElementsByTagName("p");
// console.log(l)
// l.classname="paragraph";
// let que= document.querySelector("h1");
// que.textContent="This is Not Js";
// console.log(que.parentElement);
// let m=document.querySelector("button")
// m.classname="buttons";
// console.log(m)
//console.log(l.class)

// someE.onclick=bgColor;
// console.log(someE)
// let from=document.querySelector("form");
// from.prepend(someE);
// let thiss=document.getElementById("text");
// console.log(thiss);

// function changeBackground(){
//     document.body.style.backgroundColor="rgb(255, 55, 121)";
// }
// let p1=document.getElementById("p1");
// p1.addEventListener("mouseover" ,changeBackground);
// let changeBack=document.getElementById("parag")
// console.log(changeBack)
// changeBack.addEventListener("mouseover", removebg);
// function removebg(){
//     document.body.style.backgroundColor="";
// }

// let myform=document.getElementById("formid")

// function checkValidity(e){
// e.preventDefault();
// let myinput=document.querySelectorAll("#formid input");
// myinput[0]=style.backgroundColor="";
// myinput[1]=style.backgroundColor="";
// myinput[2]=style.backgroundColor="";

// if(myinput[0].value.length==0){
//     alert("Please enter first name");
//     myinput[0]=style.backgroundColor="pink"
// }
// if(myinput[1].value.length==0){
//     alert("Please enter last name ");
//     myinput[1]=style.backgroundColor="pink"
// }
// if(myinput[2].value.length==0){
//     alert("Please enter your password");
//     myinput[2]=style.backgroundColor="pink"
// }
// if(myinput[2].value<8) {
//     alert("Your password is not strong")
// }
// }
// myform=addEventListener("submit", checkValidity)
// let s=document.getElementById("submits")
// s.addEventListener("click", function(e) {
//     e.preventDefault();
//     myinput.style.backgroundColor="rgb(255, 119, 119)";
//     myinput.style.borderColor="red";
//     myinput.style.color="green";
// }
// )
// let myd=document.createElement("div");
// let ms =addEventListener("click" , function () {
//     myd.innerHTML="please fill the form";
//     from.prepend(myd);
//     myd.style.backgroundColor="black";
//     myd.style.padding="10px";
// } )

// let anchor=document.getElementsByTagName("a")[0];
// anchor.addEventListener("click" , function(a){
//     a.preventDefault();
//     anchor.textContent="This is anchor is prevented from going to another website";
//     anchor.style.textDecoration="none";
//     anchor.style.color="red";
//     anchor.style.fontFamily="cursive";
// })

let js=$("h1").click().css("color", "blue");
// let jm=$(".container").click().css("backgroundColor", "yellow");
// console.log(jm.click().css("backgroundColor", "yellow"));
js.hide();
js.show();
js.html("<h5> This is the changed header</h5>");
let myfr=$("#formid");
myfr.css(
    "backgroundColor", "green"
)
myfr.append("<h1> This is the appended header after the form tag")
myfr.before("<p> Welcome to the form tag</p>")
myfr.css({
    "color": "blue",
    "fontFamily": "impact",
    "fontSize": "15px"
})

myfr.addClass("yellow");
myfr.removeClass("yellow")

// let firsn=$("input:first");
// firsn.val("This is first name");
// let lis=$("input").css("color", "blue");
// let mis=$("#error");
// let buts=$("#mybutton").on("click", display)
// function display(e){
//     e.preventDefault()
//     $("body").css("backgruondColor","tomato")
//     mis.css(
//         {
//             "color": "white",
//             "backgroundColor": "tomato",
//             "border" : "1px white solid",
//             "padding" : "10px",
//             "fontSize" : "15px"
//         }
//         )
//         $("input").css("backgroundColor" , "pink")
// }
$("#formid").on("submit", function(e){
    e.preventDefault();
    let x=$("input[name='First name' ]").val();
    let y=$("input[name='Last name' ]").val();
    let z=$("#input3").val();
    if($.isNumeric(x) && $.isNumeric(y))
    {
        let sum=parseInt(x) + parseInt(y);
       $(this).append("<p>" + sum + "</p>").css(
        {
            "padding" : "30px",
            "boderStyle" : "white",
            "fontFamily" : "lucida"
        }
       )
    }
    else
    {
        $("#formid").prepend("<p> Please enter only numbers");
    }
} );

$("#click").css(
    {
        "border" : "1px green solid",
        "padding ": "30px",
        "backgroundColor": "yellow",
        "color ": "red"
    }
);

$("#hide").on("click" , function( ) {
    $(this).hide(); 
})