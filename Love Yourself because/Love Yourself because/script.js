const compliments = ["Accomplished", "Appreciative", "Artistic", "Awesome", "Benevolent", "Bold", "Brave", "Calm", "Cheerful", "Clever", "Considerate", "Cool", "Courteous", "Creative", "Curious", "Cute", "Decisive", "Disciplined", "Empathetic", "Ethical", "Flexible", "Funny", "Good", "Grateful", "Honest", "Honorable", "Humorous", "Idealistic", "Imaginative", "Inspirational", "Intelligent", "Interesting", "Joyful", "Just", "Kind", "Logical", "Loving", "Loyal", "Mature", "Methodical", "Neat", "Nice", "Observant", "Playful", "Punctual", "Pure", "Purposeful", "Quality", "Quick", "Reliable", "Responsible", "Selfless", "Sensible", "Skillful", "Smart", "Suave", "Talented", "Thoughtful", "Uninhibited", "Unselfish", "Vast", "Very Awesome", "Wacky", "Whimsical", "Wise", "X-ceptional", "Youthful", "Zany", "Zippy"];

const inputBox = document.getElementById("name");
const compBox = document.getElementById("compbox");

function processCompliments() {
    const nameArr = inputBox.value.split("");
    compBox.replaceChildren();
    nameArr.forEach(processLetter);
    inputBox.value = "";
}

function processLetter(value, index, array) {
    const letter = value.toUpperCase();
    // Only add something if the character is a letter
    if (letter.match(/[a-z]/i)) {
        const validCompliments = [];
        for (let i = 0; i < compliments.length; i++) {
            if (compliments[i].startsWith(letter)) {
                validCompliments.push(compliments[i]);
            }
        }
        const compPara = document.createElement("p");
        compPara.innerText =
            validCompliments[
                Math.floor(Math.random() * validCompliments.length)
            ];
        compBox.appendChild(compPara);
    }
}