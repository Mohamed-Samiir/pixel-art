
const sideLength = document.getElementById('side-length'),
      pixelShape = document.getElementsByName('shape'),
      applyGridBtn = document.getElementById('apply-grid'),
      drawingColor = document.getElementById('drawing-color'),
      clearGridBtn = document.getElementById('clear-grid'),
      canvas = document.getElementById('drawing-canvas'),
      canvasWidth = 600,
      canvasHeight = 600;


applyGridBtn.addEventListener('click', function(){
    if(sideLength.value !== ''){
        let sideCount = parseInt(sideLength.value);
        if(canvas.childNodes){
            canvas.innerHTML='';
        }
        
        for(let i = 0; i < sideCount; i++){
            for(let j = 0; j < sideCount; j++)
                canvas.appendChild(createPixel(sideCount,canvasWidth,canvasHeight, getShape(pixelShape)));

            canvas.appendChild(document.createElement('br'));
        }
    }
});

canvas.addEventListener('click', function(e){
    if(e.target.classList.contains('pixel')){
        e.target.style.backgroundColor = drawingColor.value;
    }
});

clearGridBtn.addEventListener('click', clearCanvas);

function clearCanvas(){
    /*while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }*/

    canvas.innerHTML = `<span class="canvas-starter-text center-align">Drowing Canvas</span>`;
}

function createPixel (sideCount,canvasWidht,canvasHeight,pixelShape){
    let div = document.createElement('div');
    div.style.width = `${canvasWidht/sideCount}px`;
    div.style.height = `${canvasHeight/sideCount}px`;
    div.classList += `pixel ${pixelShape} `;

    return div;
}

function getShape (shapesList){
    for(let k = 0; k < shapesList.length; k++){
        if(shapesList[k].checked){
            return shapesList[k].value;
        }
    }
}


