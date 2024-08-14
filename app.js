function encryptText() {
    let inputText = document.getElementById("inputText").value;

    // Validar que solo contenga letras minúsculas y sin caracteres especiales
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
        return;
    }

    let encryptedText = inputText.replace(/e/g, "enter")
                                 .replace(/i/g, "imes")
                                 .replace(/a/g, "ai")
                                 .replace(/o/g, "ober")
                                 .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;

    // Validar que solo contenga letras minúsculas y sin caracteres especiales
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
        return;
    }

    let decryptedText = inputText.replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ai/g, "a")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
