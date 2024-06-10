var textInput = document.querySelector("#textInput")
var QRImg = document.querySelector("#QRImg")
async function generate(){
    var apiURL = ("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textInput.value)
    var imgsource=await fetch(apiURL)
    var QRImg=document.querySelector("#QRImg")
    QRImg.src=apiURL;
    QRImg.classList.toggle("show-qr")
    document.querySelector(".window").style.height="350px"
}