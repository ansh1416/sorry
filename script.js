document.addEventListener("DOMContentLoaded", () => {

const apologyBtn = document.getElementById("apologyBtn");
const apology = document.getElementById("apology");
const approveBtn = document.getElementById("approveBtn");
const statusText = document.getElementById("statusText");
const loveEnding = document.getElementById("loveEnding");
const introSeal = document.getElementById("introSeal");
const memoryPhoto = document.getElementById("memoryPhoto");

/* OPEN LETTER */

apologyBtn.addEventListener("click", () => {

console.log("OPEN CLICKED");

introSeal.style.display = "none";
apology.classList.remove("hidden");

createHearts();

});

/* APPROVE APPLICATION */

approveBtn.addEventListener("click", () => {

statusText.innerText = "HR Decision: Application Approved ❤️";

createPetals();

memoryPhoto.classList.add("show");

document.querySelector(".letter").classList.add("blur-bg");

setTimeout(() => {

loveEnding.classList.remove("hidden");

},1200);

});

/* HEART EXPLOSION */

function createHearts(){

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="💗";

heart.style.left=Math.random()*window.innerWidth+"px";
heart.style.top=Math.random()*window.innerHeight+"px";

heart.style.setProperty("--x",(Math.random()*600-300)+"px");
heart.style.setProperty("--y",(Math.random()*600-300)+"px");

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),3000);

}

}

/* ROSE PETALS */

function createPetals(){

for(let i=0;i<80;i++){

let petal=document.createElement("div");

petal.className="petal";
petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

document.body.appendChild(petal);

setTimeout(()=>petal.remove(),7000);

}

}

});