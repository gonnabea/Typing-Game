const settingBtn = document.getElementById("settingBtn"),
settingArea = document.getElementById("settingArea"),
keyword = document.getElementById("keyword"),
answerInput = document.getElementById("answerInput"),
leftTime = document.getElementById("leftTime"),
score = document.getElementById("score"),
difficulty = document.getElementById("difficulty")
words = ["참다","크기","고기","남기다","서양","주요","지나치다","가져오다","냄새",
"부드럽다","여기다","공연","남녀","내놓다","만들어지다","심각하다","준비","계속되다",
"대답하다","대담하다","업무","입시","준비하다","청소년"]


let time = 0,
scoreValue = 0,
difficultyIndex = 1;

function showKeyword(){
    const randomNum = Math.floor(Math.random()*words.length)
    keyword.innerHTML = words[randomNum]
}

function handleSettingBtn(){
    settingArea.style.animation = "showSetting 0.3s forwards";
    
    settingBtn.removeEventListener("click",handleSettingBtn);
    settingBtn.addEventListener("click", handlehideSetting);
}

function handlehideSetting(){
    settingArea.style.animation = "hideSetting 0.3s forwards";
    
    settingBtn.addEventListener("click",handleSettingBtn);
    settingBtn.removeEventListener("click", handlehideSetting);
}

function handleTyping(e){
    
    if(e.target.value === keyword.innerHTML){
        e.target.value = null;
        showKeyword()
        leftTime.innerHTML = `남은시간: ${time+=difficultyIndex}`;
        score.innerHTML = `스코어: ${scoreValue+=difficultyIndex}`;
        console.log(time)
    }
}

function handleDifficulty(){
    if(difficulty.value === "easy"){
        difficultyIndex = 1
    }
    else if(difficulty.value === "medium"){
        difficultyIndex = 2
    }
    else{
        difficultyIndex = 3
    }
}

function init(){
    showKeyword()
    settingBtn.addEventListener("click", handleSettingBtn);
    answerInput.addEventListener("input", handleTyping);
    difficulty.addEventListener("change", handleDifficulty)
}

init();