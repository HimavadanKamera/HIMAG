let aish = document.createElement("h3");
aish.innerHTML = "I'm Hi";

/*aish.textContent = "I'm Chitti";*/
document.getElementById("vasi").appendChild(aish); 
setTimeout(()=>{
    let re = document.getElementsByClassName("a")[2];
    if (re){
        re.remove();
    }
},2000);

let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by JS";
newHeading.style.color="red";
document.body.appendChild(newHeading);

setTimeout(()=>{
    let newText = document.createElement("p") ;
    newText.textContent = "This text is added after 3 seconds";
    document.body.appendChild(newText);

},3000);

let tagText = document.createElement("p");
tagText.textContent = "This text is appended to the tag";
tagText.style.color="blue";
document.getElementById("vasi").appendChild(tagText); 





