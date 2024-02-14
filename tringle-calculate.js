function tringleCalculate(){
  const getTextbase= document.getElementById('input-trianglebase')
  const basetext=getTextbase.value;
  const base = parseFloat(basetext);
  

  const getTexthight= document.getElementById('input-trianglehight')
  const highttext=getTexthight.value;
  const hight = parseFloat(highttext);

  const tringlearea=0.5*base*hight;

  document.getElementById('Area').innerText=tringlearea;
}