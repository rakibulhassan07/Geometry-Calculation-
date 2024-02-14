function Ellipse()
{
    const ellipseB1=document.getElementById('EllipseBase1')
    const ellipseBaseText=ellipseB1.value
    const EllipseBase=parseFloat(ellipseBaseText);
    const ellipseB2=document.getElementById('EllipseBase2')
    const ellipseBaseText1=ellipseB2.value
    const EllipseBase1=parseFloat(ellipseBaseText1);

    const EllipseArea=3.1416*EllipseBase*EllipseBase1;
    document.getElementById('Area').innerText=EllipseArea;
}