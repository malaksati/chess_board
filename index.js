/* 
    رقعة شطرنج
    8 rows, 8 columns
    innerHtml 
*/
var HTML = "<table><tr>";
var j, i
for(i=1;i<=8;i++) 
{
    if (i % 2 != 0)  //odd
    {
        HTML += "<tr>"
        for(j=1;j<=8;j++)
        {
            if (j % 2 == 0) {
                HTML += "<td class='black'></td>";
            } else {
                HTML += "<td class='white'></td>";
            }

        }       
        HTML += "</tr>"
    } else { // even
        HTML += "<tr>"
        for(j=1;j<=8;j++)
        {
            if (j % 2 != 0) {
                HTML += "<td class='black'></td>";
            } else {
                HTML += "<td class='white'></td>";
            }

        }       
        HTML += "</tr>"
    }
    
}
HTML += "</table>"; 
document.getElementById("chess").innerHTML = HTML;
