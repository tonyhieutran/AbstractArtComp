// This is my script for the Abstract Art Competition made my Tony Tran
// started on the 22nd of June 2022. This website is designed for the
// user to input parameters output parameters onto a canvas. Users
// will also be able to clear the canvas, save art and process the 
// art entry through a submission form. All entries must follow the set
// of condition inorder to submit. Spanish instructions also provided  
// if users wish to use.

'use strict'
// Declare global variables
let canvas = document.getElementById("mycanvas"); 
let ctx = canvas.getContext("2d");

// Event Listeners
document.querySelector("#circlebutton").addEventListener("click", drawCircle);
document.querySelector("#quadbutton").addEventListener("click", drawQuad);
document.querySelector("#linebutton").addEventListener("click", drawLine);
document.querySelector("#clearbutton").addEventListener("click", clearRec);
document.querySelector("#cnfpwd").addEventListener("change", validatePassword);
document.querySelector("#mycanvas").addEventListener("mousemove", coord)
// document.querySelector("#engbutton").addEventListener('click', changespanish);
// document.querySelector("#spabutton").addEventListener('click', changeenglish);

function drawCircle() {
    // Draw a circle using the set attributes, input parameters and canvas methods
    let xc = document.querySelector("#xcircle").value;
    let yc = document.querySelector("#ycircle").value;
    let rc = document.querySelector("#radius").value;
    ctx.beginPath();
    ctx.arc(xc, yc, rc, 0, 2 * Math.PI);
    ctx.strokeStyle = document.querySelector("#linecircle").value;
    ctx.lineWidth = document.querySelector("#lineth").value;
    ctx.stroke();
    ctx.fillStyle = document.querySelector("#fillcircle").value;
    ctx.fill();
}   

function drawQuad() {
    // Draw a quadrilateral using the set attributes, input parameters and canvas methods
    let xq = document.querySelector("#xquad").value;
    let yq = document.querySelector("#yquad").value;
    let wq = document.querySelector("#wquad").value;
    let hq = document.querySelector("#hquad").value;
    ctx.beginPath();
    ctx.rect(xq, yq, wq, hq)
    ctx.strokeStyle = document.querySelector("#linequad").value;
    ctx.lineWidth = document.querySelector("#lineth").value;
    ctx.stroke();
    ctx.fillStyle = document.querySelector("#fillquad").value;
    ctx.fill();
}
function drawLine() {
    // Draw a straight using the set attributes, input parameters and canvas methods
    let xs = document.querySelector("#xstart").value;
    let ys = document.querySelector("#ystart").value;
    let xe = document.querySelector("#xend").value;
    let ye = document.querySelector("#yend").value;
    ctx.beginPath();
    ctx.moveTo(xs, ys);
    ctx.lineTo(xe, ye);
    ctx.strokeStyle = document.querySelector("#linecolor").value;
    ctx.lineWidth = document.querySelector("#lineth").value;
    ctx.stroke();
}

function clearRec() {
    // Clears the whole canvas blank
    ctx.clearRect(0, 0, 400, 400);
}

function coord(event) {
    // Aids in finding the prefered X and Y Coordinate
    let x = event.offsetX;
    // consolelog.(x)
    let y = event.offsetY;
    document.getElementById("coordxy").textContent = "X: " + x + " Y: " + y;
}
    
function langchange(lang) {
    // Each button is designated to their respective language value.
    // Clicking a button will change the language value and associated colour
    // The loop is implemented to allow the change of colour on both objects
    // based on their class which is set to headcolor.
    let headtitle = ""
    let text = ""
    let titlecolor = {
        english: 'black',
        spanish: 'blue',
    };
    if (lang == 'english') {
    headtitle = "ABSTRACT ART COMPETITION";
    text = `<br> <strong> INSTRUCTIONS </strong> 
        <br>Input parameters then draw shape. Line Thickness is universal. 
        <br>To start again click Clear. 
        <br>Right click to save the drawing as a png. 
        <br>Upload your image. 
        <br>Fill the submission form and submit. 
        <br>GOOD LUCK!`;
    }
    else if (lang == 'spanish') {
    headtitle = "CONCURSO DE ARTE ABSTRACTO";
    text = `<br> <strong> INSTRUCCIONES </strong> 
        <br>Ingrese los parámetros y luego dibuje la forma. El grosorde 
        línea es universal.
        <br>Para comenzar de nuevo, haga clic en Borrar.
        <br>Haga clic derecho para guardar el dibujo como png.
        <br>Sube tu imagen.
        <br>Complete el formulario de envío y envíelo
        <br>¡BUENA SUERTE!`;
    }
    
    document.getElementById("h1title").innerHTML = headtitle;
    document.getElementById("pInstructions").innerHTML = text;
    
    changeColor()
    function changeColor() {
        let nodeList = document.querySelectorAll(".headcolor");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.color = titlecolor[lang];
        }
    }
}    


function validatePassword(){
    // Checking for password confirmation to make sure there is the appropriate match
  if(document.querySelector("#pwd").value != document.querySelector("#cnfpwd").value) {
    document.querySelector("#cnfpwd").setCustomValidity("Passwords Don't Match");
    document.querySelector("#cnfpwd").reportValidity();
    document.querySelector("#pwd").value ='';
    document.querySelector("#cnfpwd").value ='';
  } 
  else {
    document.querySelector("#cnfpwd").setCustomValidity('');
    document.querySelector("#cnfpwd").reportValidity();
  } 
}
