function parallelogram(){
    const parallelogramB=document.getElementById('input-parallelogrambase');
    const parallelogrambasetext=parallelogramB.value;
    const parallelogramBase=parseFloat(parallelogrambasetext);
    
    const parallelogramH=document.getElementById('input-parallelogramhigth');
    const parallelogramhighttext=parallelogramH.value;
    const parallelogramhight=parseFloat(parallelogramhighttext);
     
    const parallelogramarea=parallelogramBase*parallelogramhight;
    document.getElementById('Area').innerText= parallelogramarea;

}