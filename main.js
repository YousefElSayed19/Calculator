let text =document.querySelector(".text");

function getNumber(number){
    if (text.innerHTML==='0'){
        text.innerHTML=''
    }
    text.innerHTML +=number;
}
function getOperation(operartion){
    if (text.innerHTML===0){
        text.innerHTML=''
    }
    if (operartion !='clear' && operartion != 'delete' && operartion != 'result'){
        text.innerHTML +=operartion;
    }
    if (operartion=='result'){
        if (text.innerHTML.length===0){
            alert("Filed Is Empty !")
        }else{
            text.innerHTML=eval(text.innerHTML).toString()==='Infinity'?'':eval(text.innerHTML).toString();
            if (text.innerHTML.length==0){
                alert("Can't Divide By Zero!")
            }
        }
    }
    let arrDelete =text.innerHTML.trim().split("");
    if (operartion==="delete"){
        arrDelete.pop();
        text.innerHTML=arrDelete.join("");
        if (text.innerHTML.length==0 || text.innerHTML=='0'){
            text.innerHTML='0';
        }
    }
    if (operartion==="clear"){
        text.innerHTML='0';
    }
}
