function rectanglearea(){
    const rectangleB=document.getElementById('input-rectanglewidth')
    const rectangLebaseText=rectangleB.value;
    const width=parseFloat(rectangLebaseText);

    const rectangleH=document.getElementById('input-rectanglelength')
    const rectangLehightText=rectangleH.value;
    const length=parseFloat(rectangLehightText);

    const rectanglearea=width * length;
    
    document.getElementById('Area').innerText= rectanglearea;
    
}