let message0 = document.querySelector(".message");
let message1 = document.querySelector(".message1");
let msgBtn = document.querySelector(".msg");
let alertBtn = document.querySelector(".alert");
console.log(typeof message0);

var mytime;

let displayMsg = (ELM) => {
    ELM.classList.remove("hide");
    mytime = setTimeout(() => {
        ELM.classList.add("hide");
    }, 2000);
};
let stay = (ELM) => {
    clearTimeout(mytime);
    ELM.classList.remove("hide");
    ELM.classList.add("fixed");
};
let leave = (ELM) => {
    let mytime2 = setTimeout(() => {
        ELM.classList.add("hide");
    }, 500);
};
let addEvents = (elm, btn) => {
    elm.classList.add("hide");
    elm.addEventListener("mouseover", () => stay(elm));
    elm.addEventListener("mouseout", () => leave(elm));
    btn.addEventListener("click", () => displayMsg(elm));
};

addEvents(message0, msgBtn);
addEvents(message1, alertBtn);
