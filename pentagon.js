function Pentagon()
{
    const PentagonBase1 = document.getElementById('PentagonBase');
    const PentagonBaseText=PentagonBase1.value;
    const PentagonBase =parseFloat(PentagonBaseText);
    
    const PentagonHight1 = document.getElementById('PentagonBase');
    const PentagonHightText=PentagonHight1.value;
    const PentagonHight =parseFloat(PentagonHightText);

    const PentagonArea=0.5 * PentagonBase * PentagonHight;
    document.getElementById('Area').innerText=PentagonArea;
}