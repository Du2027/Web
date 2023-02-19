// get user hours
var currentTime = new Date(); 
var time = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

console.log("time:",time + ":",minutes+ ":",seconds +"");

//get title
var title=document.getElementById("title1");

//cange title depending on the users time
if (time <= 14){
    title.textContent = "Good morning";
} else if(time <= 17){
    title.textContent = "Good Afternoon";
} else if(time <= 23){
    title.textContent = "Good Evening";
} else {
    title.textContent = "Hello"
}


