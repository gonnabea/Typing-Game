const settingBtn = document.getElementById("settingBtn"),
settingArea = document.getElementById("settingArea"),
keyword = document.getElementById("keyword"),
answerInput = document.getElementById("answerInput"),
leftTime = document.getElementById("leftTime"),
score = document.getElementById("score"),
difficulty = document.getElementById("difficulty"),
finished = document.getElementById("finished"),
mainArea = document.getElementById("mainArea")
words = ["참다","크기","고기","남기다","서양","주요","지나치다","가져오다","냄새",
"부드럽다","여기다","공연","남녀","내놓다","만들어지다","심각하다","준비","계속되다",
"대답하다","대담하다","업무","입시","준비하다","청소년"],
interval = setInterval(timer,1000)


let time = 10,
scoreValue = 0,
difficultyIndex = 2;

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
    const insertedText = e.target.value;
    if(insertedText === keyword.innerHTML){
        answerInput.value = "";
        leftTime.innerHTML = `남은시간: ${time+=difficultyIndex}`;
        score.innerHTML = `스코어: ${scoreValue+=1}`;
        console.log(time)
        showKeyword()
    }
}

function handleDifficulty(){
    if(difficulty.value === "easy"){
        difficultyIndex = 3
    }
    else if(difficulty.value === "medium"){
        difficultyIndex = 2
    }
    else{
        difficultyIndex = 1
    }
}

function timer(){
    leftTime.innerHTML = `남은시간: ${time-=1}`;
    if(time<=0){
        handleFinish()
    }
}

function handleFinish(){
    clearInterval(interval)
    mainArea.style.display = "none";
    finished.style.display = "flex";
    const finalScore = document.getElementById("finalScore"),
    reloadBtn = document.getElementById("reloadBtn");
    finalScore.innerHTML = `최종 스코어: ${scoreValue}`;
    reloadBtn.addEventListener("click", handleRestart)
}

function handleRestart(){
    interval = setInterval(timer,1000);
    time = 10,
    scoreValue = 0;
    finished.style.display = "none";
    mainArea.style.display = "flex";
    leftTime.innerHTML = `남은시간: ${time}`;
    score.innerHTML = `스코어: ${scoreValue}`;
    init();
}

function init(){
    showKeyword()
    settingBtn.addEventListener("click", handleSettingBtn);
    answerInput.addEventListener("textInput", handleTyping);
    difficulty.addEventListener("change", handleDifficulty);
}

init();