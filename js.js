// START GLOBE FUNCTION
function handleActiveClassFromElements(arrayOfElements,activeElement){
    if(activeElement===null){
        arrayOfElements.forEach(el => {
            el.classList.remove("active");
        });
    }
    else{
        arrayOfElements.forEach(el => {
            el.classList.remove("active");
        });
        activeElement.classList.add("active")
    }
}
// END GLOBE FUNCTION
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
        handleActiveClassFromElements(tabs,e.currentTarget);
        contents.forEach((content)=>{
            content.style.display="none";
        });
        document.querySelector(e.currentTarget.dataset.content).style.display="block";
    });
});
//END Create TABS
// Start Create Our Works
let switchers=document.querySelectorAll(".works ul li");
let workImages=Array.from(document.querySelectorAll(".gallery img"));
switchers.forEach(li => {
    li.addEventListener("click",e=>{
        handleActiveClassFromElements(switchers,e.target);
    });
    li.addEventListener("click",manageImages);
});
function manageImages(){
    workImages.forEach((img)=>{
        img.style.display='none';
        document.querySelectorAll(`.gallery .${this.getAttribute('data-switch')}`).forEach((show)=>{
            show.style.display='block';
        });
    });
}
// End Create Our Works
// START SLIDER WITH NEXT,PREVIOUS AND PAGINATION
let sliderImages=Array.from(document.querySelectorAll(".slider img"));
let sliderNumber=document.querySelector(".slider .slider-number");
let nextButton=document.querySelector(".slider-control .next");
let prevButton=document.querySelector(".slider-control .prev");
let startSlider=5;
createPaginationBullet(sliderImages.length,startSlider);
let paginationList=document.querySelectorAll(".slider-control li");
paginationList.forEach(li => {
    li.addEventListener("click",e=>{
        handleActiveClassFromElements(paginationList,e.target);
        displaySliderImage(e.target.innerHTML);
    })
});
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;
function displaySliderImage(imageIndex){
    handleActiveClassFromElements(sliderImages,null);
    sliderImages[imageIndex-1].classList.add("active");
    sliderNumber.innerHTML=`Slider # ${imageIndex}`;
    checkButton(imageIndex);
}
function createPaginationBullet(length,startSlider){
    for (let i = 0; i < length; i++) {
        if(i==(startSlider-1)){
            createElement(document.querySelector(".slider-control ul"),"li","active",i+1,"data-index",i+1);
        }
        else{
            createElement(document.querySelector(".slider-control ul"),"li","",i+1,"data-index",i+1);
        }
    }
    displaySliderImage(startSlider);
    checkButton(startSlider);
}
function nextSlide(){
    if(nextButton.classList.contains("disabled")){
        return false;
    }
    else if(prevButton.classList.contains("disabled")){
        prevButton.classList.remove("disabled");
    }
    let currentSlider=document.querySelector(".slider .pagination li.active");
    checkButton(Number(currentSlider.dataset.index)+1);
    displaySliderImage(Number(currentSlider.dataset.index)+1);
    handleActiveClassFromElements(paginationList,paginationList[currentSlider.dataset.index]);
}
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
        return false;
    }
    else if(nextButton.classList.contains("disabled")){
        nextButton.classList.remove("disabled");
    }
    let currentSlider=document.querySelector(".slider .pagination li.active");
    checkButton(Number(currentSlider.dataset.index)-1);
    displaySliderImage(Number(currentSlider.dataset.index)-1);
    handleActiveClassFromElements(paginationList,paginationList[Number(currentSlider.dataset.index)-2]);
}
function createElement(parent,element,className,text,attribute,value){
    let elementTag=document.createElement(element);
    elementTag.className=className;
    elementTag.setAttribute(attribute,value);
    let textNode=document.createTextNode(text);
    elementTag.appendChild(textNode);
    parent.appendChild(elementTag);
    return elementTag;
}
function checkButton(position){
    if(position==1){
        nextButton.classList.remove("disabled");
        prevButton.classList.add("disabled");
    }
    else if(position==sliderImages.length){
        nextButton.classList.add("disabled");
        prevButton.classList.remove("disabled");
    }
}
// END SLIDER WITH NEXT,PREVIOUS AND PAGINATION 
