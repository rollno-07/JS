 let COLORS=["lightsalmon","salmon","darksalmon","lightcoral","indianred","crimson","firebrick","red","darkred","lightsalmon","salmon","darksalmon","lightcoral","indianred","crimson","darkred","lemonchiffon","lightgoldenrodyellow","papayawhip","moccasin","peachpuff","palegoldenrod","khaki","darkkhaki","yellow","lawngreen","chartreuse","limegreen","lime","forestgreen","green","darkgreen","greenyellow","yellowgreen","springgreen","mediumspringgreen","lightgreen","palegreen","darkseagreen","mediumseagreen","seagreen","olive","darkolivegreen","olivedrab","lightcyan","cyan","aqua","aquamarine","mediumaquamarine","paleturquoise","turquoise","mediumturquoise","darkturquoise","lightseagreen","cadetblue","darkcyan","teal","powderblue","lightblue","lightskyblue","skyblue","deepskyblue","lightsteelblue","dodgerblue","cornflowerblue","steelblue","royalblue","blue","mediumblue","darkblue","navy","midnightblue","mediumslateblue","slateblue","darkslateblue","lavender","thistle","plum","violet","orchid","fuchsia","magenta","mediumorchid","mediumpurple","blueviolet","darkviolet","darkorchid","darkmagenta","purple","indigo","pink","lightpink","hotpink","deeppink","palevioletred","mediumvioletred","white","snow","honeydew","mintcream","azure","aliceblue","ghostwhite","whitesmoke","seashell","beige","oldlace","floralwhite","ivory","antiquewhite","linen","lavenderblush","mistyrose","gainsboro","lightgray","silver","darkgray","gray","dimgray","lightslategray","slategray","darkslategray","black","blanchedalmond","bisque","navajowhite","wheat","burlywood","tan","rosybrown","sandybrown","goldenrod","peru","chocolate","saddlebrown","sienna","brown","maroon"];


 let root=document.querySelector(".button");
 let h1=document.querySelector("h1");


 function handleClick(arrayColor,e){
    if(e.shiftKey===true){
    h1.innerText=arrayColor;
    h1.style.backgroundColor=arrayColor;
    }
    else{
        h1.innerText="click with shiftKey to change the color";
    ;
    }
}
 COLORS.forEach((color) => {
     let div=document.createElement("div");
     div.classList.add("box");
     div.addEventListener("click",function(event){
        handleClick(color,event);
     })

     
     div.style.backgroundColor=color;
     root.append(div);
 })