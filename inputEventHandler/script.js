// let inputText=document.querySelector("#text");
// let select=document.querySelector("#gender");
// let terms=document.querySelector("#terms");

// let userInfo={};


// function handleKey(event){
//  userInfo.email=event.target.value;
// }

// function handleSelect(event){
//     userInfo.gender=event.target.value;
// }
// function handleTerms(event){
//     userInfo.agreeTerms=event.target.checked;
// }


// inputText.addEventListener("input", handleKey);
// select.addEventListener("input", handleSelect);
// terms.addEventListener("input", handleTerms);

let form=document.querySelector("form");

let userInfo={};

function handleSubmit(event){
    event.preventDefault();
    userInfo.email=form.elements.email.value;
    userInfo.gender=form.elements.gender.value;
    userInfo.terms=form.elements.terms.checked;

    console.log(userInfo);
};


form.addEventListener("submit",handleSubmit);
