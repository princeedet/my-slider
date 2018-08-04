var mystore = ['myimg/img1.jpg', 'myimg/img2.jpg', 'myimg/img3.jpg', 'myimg/img4.jpg'];
var cry=0;
var play=document.getElementById("cry");

function people() {
play.src=mystore[cry];
cry++;
if(cry>=mystore.length){
    cry=0;
}
}

setInterval(people,2000);
