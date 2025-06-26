let arr= document.querySelectorAll(".MRCE");
arr[0].style.color="red";
arr[1].style.color="pink";
arr[2].style.color="blue";
document.body.style.backgroundColor="yellow";
document.querySelector(".MRCET").style.color="blue";
document.querySelector(".MR").style.color="red";
 function changebackground(){
   if(document.body.style.backgroundColor==="grey"){
        document.body.style.backgroundColor="red";}
        else{
            document.body.style.backgroundColor="grey";
        }
}
function changeText(){
    document.getElementById("mrcet").innerHTML="CMRCET";
}

document.getElementsByClassName("button1")[0].style.color="blue";