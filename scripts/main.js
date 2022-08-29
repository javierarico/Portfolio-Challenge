document.body.style.fontFamily = "sans-serif";
//document.body.style.margin = "0 5rem"

let title = document.createElement('h1');
title.classList = "title";
let personName = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
title.textContent = personName;
title.style.letterSpacing = ".7rem";
title.style.fontWeight = "lighter";
title.style.fontSize = "3rem";
title.style.textAlign = "center";
document.body.appendChild(title);

let dynamicSection = document.createElement('div');
dynamicSection.classList = "dynamic-section";
dynamicSection.style.backgroundColor = "#ebd5d7";
dynamicSection.style.padding = ".2rem";
dynamicSection.style.display = "flex";
dynamicSection.style.flexDirection = "row";
dynamicSection.style.alignItems = "center";
document.body.appendChild(dynamicSection);

let dynamicIcon = document.createElement('p');
dynamicIcon.classList = "dynamic-icon";
dynamicIcon.style.fontSize = "1rem";
dynamicIcon.style.marginLeft = "1.5rem";
dynamicIcon.style.marginRight = ".5rem";
dynamicSection.appendChild(dynamicIcon);

let contentToEvaluate = asabenehChallenges2020.author.titles;
let indexContentToEvaluate = 1;

let dynamicContent = document.createElement('p');
dynamicContent.classList = "dynamic-content";
dynamicContent.style.fontSize = "1.3rem";
dynamicIcon.textContent = contentToEvaluate[0][0];
dynamicContent.textContent = contentToEvaluate[0][1];
dynamicContent.style.animationName = "slidein, fadein";
dynamicContent.style.animationDuration = "3s";
dynamicContent.style.animationIterationCount = "infinite";
dynamicSection.appendChild(dynamicContent);

let icon;
let personsTitle;
const randomContent = function(){
    //console.log(contentToEvaluate[indexContentToEvaluate]);
    icon = contentToEvaluate[indexContentToEvaluate][0];
    personsTitle = contentToEvaluate[indexContentToEvaluate][1];
    dynamicIcon.textContent = icon;
    dynamicContent.textContent = personsTitle;
    if(indexContentToEvaluate < (contentToEvaluate.length - 1)){
        indexContentToEvaluate++;
    } else {
        indexContentToEvaluate = 0;
    }
}
setInterval(randomContent, 3000);

let descriptionDiv = document.createElement('div');
descriptionDiv.style.display = "flex";
descriptionDiv.style.justifyContent = "center";
descriptionDiv.style.alignItems = "center";
descriptionDiv.style.margin = "2rem 1rem";
document.body.appendChild(descriptionDiv);

let description = document.createElement('p');
description.textContent = asabenehChallenges2020.author.bio2;
description.style.lineHeight = "1.6rem";
descriptionDiv.appendChild(description);

let cardSection = document.createElement('div');
cardSection.classList = "card-section";
cardSection.style.display = "flex";
cardSection.style.flexDirection = "row";
cardSection.style.justifyContent = "center";
cardSection.style.alignItems = "center";
cardSection.style.margin = "2rem";
document.body.appendChild(cardSection);

for (let i = 0; i < 3; i++){
    let cardChallenge = document.createElement('div');
    cardChallenge.style.border = "1px outset #bababa";
    cardChallenge.style.marginRight = "4vw";
    cardChallenge.style.width = "10rem";
    cardChallenge.style.height = "8.5rem";
    cardChallenge.style.backgroundColor = "#fafafa";
    cardChallenge.style.display = "flex";
    cardChallenge.style.alignItems = "center";
    cardSection.appendChild(cardChallenge);
    let challengeText = document.createElement('p');
    let currentTxt = asabenehChallenges2020.challenges[i].name;
    challengeText.textContent = currentTxt.toUpperCase();
    challengeText.style.textAlign = "center";
    challengeText.style.padding = "4vh 2vw";
    challengeText.style.fontSize= "1rem";
    cardChallenge.appendChild(challengeText);
    
    cardChallenge.addEventListener('mouseenter', e => {
        cardChallenge.style.backgroundColor = "#ebd5d7";
        cardChallenge.style.width = "10.5rem";
        cardChallenge.style.height = "9rem";
        challengeText.style.fontSize= "1.1rem";

    });
    
    cardChallenge.addEventListener('mouseleave', e => {
        cardChallenge.style.backgroundColor = "#fafafa";
        cardChallenge.style.width = "10rem";
        cardChallenge.style.height = "8.5rem";
        challengeText.style.fontSize= "1rem";

    });
}

let bottomText = document.createElement('p');
bottomText.textContent = `The technologies I teach `;
bottomText.style.margin = "2rem 1rem";
document.body.appendChild(bottomText);

/* DYNAMIC BOTTOM TEXT - TECHS */
let techToEvaluate = asabenehChallenges2020.keywords;
let indexTechToEvaluate = 1;

let dynamicTech = document.createElement('span');
dynamicTech.style.fontSize = "1.5rem";
dynamicTech.style.padding = ".2rem .2rem";
dynamicTech.style.fontWeight = "bolder";
dynamicTech.textContent = techToEvaluate[0].toUpperCase();
dynamicTech.style.color = rgbColorGenerator();
dynamicTech.style.animationName = "fadein";
dynamicTech.style.animationDuration = "2s";
dynamicTech.style.animationIterationCount = "infinite";        
bottomText.appendChild(dynamicTech);

const randomTech = function(){
    dynamicTech.textContent = techToEvaluate[indexTechToEvaluate].toUpperCase();
    dynamicTech.style.color = rgbColorGenerator();
    if(indexTechToEvaluate < (techToEvaluate.length - 1)){
        indexTechToEvaluate++;
    } else {
        indexTechToEvaluate = 0;
    }
}
setInterval(randomTech, 2000);

function rgbColorGenerator(){
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);
    return `RGB(${num1},${num2},${num3})`;
}