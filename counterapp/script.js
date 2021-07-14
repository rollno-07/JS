function main(){
    let inc=document.querySelector(".inc");
let dec=document.querySelector(".dec");
let reset=document.querySelector(".reset");
let counter=document.querySelector("h1");

let count=0;
inc.addEventListener("click",function(){
     count=count+1;
    counter.innerText=count;

});

dec.addEventListener("click",function(){
    
    count=count-1;
    counter.innerText=count;
    
});


reset.addEventListener("click",function(){
    count=0;
    counter.innerText=count;
    
});
counter.innerText=count;
}

main();