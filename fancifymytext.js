function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyles() {
    const textArea = document.getElementById("textArea");
    const fancyRadio = document.getElementById("fancy");
    const boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        // FancyShmancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        textArea.style.fontFamily = "Comic Sans MS, cursive";
    } else if (boringRadio.checked) {
        // BoringBetty styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function addMoo() {
    const textArea = document.getElementById("textArea");
    
    
    let text = textArea.value.toUpperCase();

    
    let sentences = text.split(".");
    
    
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim()) {
            sentences[i] += "-Moo";
        }
    }
    
    
    textArea.value = sentences.join(".");
}