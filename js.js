// Start Random Background Color
let hexArray=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let colorArray=[];
for(let i=0;i<6;i++){
    colorArray.push(hexArray[Math.floor(Math.random()*hexArray.length)]);
}
let finalColor=`#${colorArray.join("")}`;
document.body.style.backgroundColor=finalColor;

let generateBtn=document.querySelector(".serial-generate .generate");
let serialArea=document.querySelector(".serial-generate .serial");
generateBtn.onclick=function(){
    let serialSize=10;
    let characters="1234567890abcdefghijklmnopqrstuwyzABCDEFGHIJKLMNOPQRSTUWYZ@#*$-_/";
    let finalSerial="";
    for(let i=0;i<serialSize;i++){
        finalSerial+=characters[Math.floor(Math.random()*characters.length)];
    }
    serialArea.innerHTML=finalSerial;
}
// End Random Background Color
// Start Count input Character and Calc percentage
let inputChar=document.querySelector("form .count-char input");
let countCharInputed=document.querySelector('form .count-char .count');
let progressChar=document.querySelector("form .count-char .progress")
let maxCharLength=inputChar.getAttribute('maxLength');
countCharInputed.innerHTML=maxCharLength;
inputChar.oninput=function(){
    progressChar.style.width=`${(100/maxCharLength)*this.value.length}%`;
    countCharInputed.innerHTML=maxCharLength-this.value.length;
    countCharInputed.innerHTML==0 ? countCharInputed.classList.add("zero"):countCharInputed.classList.remove("zero");
}
// End Count input Character and Calc percentage
//Start Create TABS
let tabs=document.querySelectorAll(".tabs ul li");
let contents=document.querySelectorAll(".tabs .content>div");
tabs.forEach((tab)=> {
    tab.addEventListener("click",function(e){
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        contents.forEach((content)=>{
            content.style.display="none";
        });
        let targetContent=document.querySelector(e.currentTarget.dataset.content);
        targetContent.style.display="block";
    });
});
//END Create TABS
// Start Create Our Works
let switchers=document.querySelectorAll(".works ul li");
let images=Array.from(document.images);
switchers.forEach(li => {
    li.addEventListener("click",toggleActive);
    li.addEventListener("click",manageImages);
});
function toggleActive(){
    switchers.forEach(li => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
function manageImages(){
    images.forEach((img)=>{
        img.style.display='none';
        document.querySelectorAll(`.gallery .${this.getAttribute('data-switch')}`).forEach((show)=>{
            show.style.display='block';
        });
    });
}
// End Create Our Works