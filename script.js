function getNumber(num){
    document.getElementById('display').value=document.getElementById('display').value + num;
}
function Clear(){
    document.getElementById('display').value = "";
}
function ans(){
    try{
        var ans = eval(document.getElementById('display').value);
        document.getElementById('display').value = ans;
        }
        catch(e){
            document.getElementById('display').value = "Error";
            }
}