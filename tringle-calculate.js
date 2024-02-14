function tringleCalculate(){
  const getTextbase= document.getElementById('input-base')
  const basetext=getTextbase.value;
  const base = parseFloat(basetext);
  console.log(base)

  const getTexthight= document.getElementById('input-hight')
  const highttext=getTexthight.value;
  const hight = parseFloat(highttext);
  console.log(hight)
  const tringlearea=0.5*base*hight;

  document.getElementById('Area').innerText=tringlearea;
}