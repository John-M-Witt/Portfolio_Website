const skills = document.getElementsByClassName('skills');
const leftArrow = document.getElementById('left_arrow');
const rightArrow = document.getElementById('right_arrow');

//Sets initial skill number
let skillNumber = 0;

// Removes arrows when additional skills are unavailable
function checkArrows () {
    if(skillNumber === 0) {
        leftArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'inline-block';
    }
    if(skillNumber === skills.length -1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'inline-block';
    }
    }

// Sets click event handler on arrows    
leftArrow.addEventListener('click', leftClick);
rightArrow.addEventListener('click', rightClick); 

// Sets the appropriate skill to be displayed and hides the others
function skillDisplay () {
    for (let i=0; i < skills.length; i++) {
        if (i === skillNumber) {
        skills[i].style.display = 'inline-block';
    } else {
    skills[i].style.display = 'none';
}
}}

//Sets initial skills and arrow displays
skillDisplay ();
checkArrows ();

//Click event handlers for arrows
function leftClick () {
    skillNumber -= 1;
    checkArrows();
    skillDisplay();
}
function rightClick () {
    skillNumber += 1;
    checkArrows();
    skillDisplay();
}
