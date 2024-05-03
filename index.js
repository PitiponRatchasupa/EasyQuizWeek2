
let total = 0;
let ans1 = false;
let ans2 = false;
function checkAnswer1(answer) {
    const btn = document.getElementsByClassName('quiz-container1')[0].getElementsByTagName("button");
    if (answer === 'a') {
        total++;
    }
    for(let element of btn){
        if(element.id != answer){
            element.style.backgroundColor = 'grey';
        }
        element.disabled = true;
    }
    ans1 = true;
    showResult();
 }

 function checkAnswer2(answer) {
    const btn = document.getElementsByClassName('quiz-container2')[0].getElementsByTagName("button");
    if (answer === 'd') {
        total++;
    }
    for(let element of btn){
        if(element.id != answer){
            element.style.backgroundColor = 'grey';
        }
        element.disabled = true;
    }
    ans2 = true;
    showResult();
 }
 
 function showResult() {
    const result = document.getElementById('result');
    if(ans1 && ans2){
        result.textContent = `${total} คะแนน`;
        result.style.color = 'green';
    }
 }

 function reload() {
    const result = document.getElementById('result');
    const btn1 = document.getElementsByClassName('quiz-container1')[0].getElementsByTagName("button");
    const btn2 = document.getElementsByClassName('quiz-container2')[0].getElementsByTagName("button");
    for(let element of btn1){
        element.style.backgroundColor = '#007BFF';
        element.disabled = false;
    }
    for(let element of btn2){
        element.style.backgroundColor = '#007BFF';
        element.disabled = false;
    }
    result.textContent = ``;
    result.style.color = 'green';
    total = 0;
 }