function rhombus()
{
    const rhombusB1= document.getElementById('input-rhombusBase1')
    const rhombusBaseText=rhombusB1.value;
    const rhombusBase = parseFloat(rhombusBaseText);

  
    const rhombusB2= document.getElementById('input-rhombusBase2')
    const rhombusBase2Text=rhombusB2.value;
    const rhombusHight = parseFloat(rhombusBase2Text);

    const rhombusArea=0.5*rhombusBase*rhombusHight;
  
    document.getElementById('Area').innerText=rhombusArea;
}