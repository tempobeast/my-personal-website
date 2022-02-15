const h2 = document.createElement("h2");
h2.textContent = "I'm getting this shit figured out";

document.querySelector("body").appendChild(h2);

const face = document.getElementById('citeTitle');

function clickAlert() {
    alert('Face image coming soon')
}

face.addEventListener('click', clickAlert);