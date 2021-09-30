if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;
    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;
            button.style.animation = "backgroundYellow 0.5s forwards";
            circle.style.animation = "moveCircleRight 0.5s forwards";
            chrome.tabs.executeScript({
                file: 'appOn.js'
            })
        }
        else {
            buttonOn = false;
            button.style.animation = "backgroundBlue 0.5s forwards";
            circle.style.animation = "moveCircleLeft 0.5s forwards";
            chrome.tabs.executeScript({
                file: 'appOff.js'
            })
        }
    })

}