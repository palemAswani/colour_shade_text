var text=document.getElementById("text");
var c=["red","blue","green","black","orange","skyblue","brown","pink","yellow","violet"]
function colour(num){
    text.style.color=c[num];
}
var space=document.getElementById("textarea");
function bgcolour(num){
    space.style.backgroundColor=c[num];
}
var s=["Helvetica","Verdana","Comic Sans MS","Luminari","Arial Black","Brush Script MT","Courier New","Tahoma"];
function textstyle(index){
    text.style.fontFamily=s[index];
}