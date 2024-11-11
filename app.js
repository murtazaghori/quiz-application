var data = [
    {
        Q: "Q1: HTML Stands for?",
        a: "Hyper Text Markup Language",
        b: "Hyper Tech Markup Language",
        c: "Hyper Touch Markup Language",
        ans: "Hyper Text Markup Language",
    },
    {
        Q: "CSS Stands for",
        a: "Cascoding Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascating Style Sheets",
        ans: "Cascading Style Sheets",
    },
    {
        Q: "Which tag is used for most large heading",
        a: "<h6>",
        b: "<h2>",
        c: "<h1>",
        ans: "<h1>",
    },
    {
        Q: "Which tag is used to make element unique",
        a: "id",
        b: "class",
        c: "label",
        ans: "id",
    },
    {
        Q: "Any element assigned with id, can be get in css",
        a: "by # tag",
        b: "by @ tag",
        c: "by & tag",
        ans: "by # tag",
    },
    {
        Q: "CSS can be used with ______ methods",
        a: "8",
        b: "3",
        c: "4",
        ans: "3",
    },
    {
        Q: "In JS variable types are ____________",
        a: "6",
        b: "3",
        c: "8",
        ans: "8",
    },
    {
        Q: "In array we can use key name and value",
        a: "True",
        b: "False",
        c: "None of above",
        ans: "False",
    },
    {
        Q: "toFixed() is used to define length of decimal",
        a: "True",
        b: "False",
        c: "None of above",
        ans: "True",
    },
    {
        Q: "push() method is used to add element in the start of array",
        a: "True",
        b: "False",
        c: "None of above",
        ans: "False",
    },
];

var question = document.getElementById("qns");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");

var answers = document.querySelectorAll(".options");
var num = 0;
var score = 0;
var myScore = document.querySelector(".myScore");
var nextBtn = document.getElementById("next");

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;

// Check selected answer
function checkAns() {
    let ans;
    // Check which radio button is selected
    answers.forEach((curElement) => {
        if (curElement.checked) {
            ans = document.getElementById(curElement.id).nextElementSibling.innerHTML;
            console.log("Selected answer: ", ans);
        }
    });
    return ans;
}

function disSelect() {
    // Deselect all radio buttons
    answers.forEach((curElement) => {
        curElement.checked = false;
    });
}

function next() {
    var checkedAns = checkAns();
    // Compare selected answer with the correct answer
    if (checkedAns === data[num].ans) {
        score++;
    }

    num++;
    disSelect();

    if (num < data.length) {
        question.innerText = data[num].Q;
        option1.innerText = data[num].a;
        option2.innerText = data[num].b;
        option3.innerText = data[num].c;
    } else {
        myScore.innerHTML = `You Scored ${score}/${data.length} <br/><br/>
        <button onclick="location.reload()">Play Again</button>`;
        
        nextBtn.style.display = "none";
    }
}
