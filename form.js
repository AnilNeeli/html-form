document.getElementById("button").addEventListener("click",function()
{
   var val1=["full-name","email","age","bloodgroup"];
   if (document.getElementById("male").checked ===true){
  val1.push("male");
  }
  else {
    val1.push("female");
  }

val1.push("color");
val1.push("mes");
val2=[];
for(var i=0;i<val1.length;i++)
{
    var a=document.getElementById(val1[i]).value;
    val2.push(a);
}
var tb1=document.getElementById("task");
var row1=tb1.insertRow();
var cel1=row1.insertCell(0);
var cel2=row1.insertCell(1);
var cel3=row1.insertCell(2);
var cel4=row1.insertCell(3);
var cel5=row1.insertCell(4);
var cel6=row1.insertCell(5);
var cel7=row1.insertCell(6);
cel1.innerHtml="anil";
cel2.innerHtml="kumar";
cel3.innerHtml="anl";
cel4.innerHtml="kumar";
cel5.innerHtml="crr";
cel6.innerHtml="done";
cel7.innerHtml="jvjl";
})