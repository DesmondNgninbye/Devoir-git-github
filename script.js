const movediv=document.getElementById("container-image");
document.addEventListener("mousemove",(event)=>{
    const x=event.clientX*100/window.innerWidth + 'px' ;
    const y=event.clientY*100/window.innerWidth + 'px' ;
console.log("x="+x,"y="+y);
movediv.style.transform=`translate(${x},${y})`;
});
document.addEventListener("mouseleave",()=>{
    movediv.style.transform="translate(0,0)";
});