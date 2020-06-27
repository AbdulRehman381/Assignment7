function getNumber(num){
var result=document.getElementById("add");
result.value+=num;

}
function clearResult(){
    var result=document.getElementById("add");
    result.value="";

}
function getResult(){
    var result=document.getElementById("add");
    result.value=eval(result.value);

}
