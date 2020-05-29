const settingBtn = document.getElementById("settingBtn"),
settingArea = document.getElementById("settingArea")

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

function init(){
    settingBtn.addEventListener("click", handleSettingBtn);
}

init();