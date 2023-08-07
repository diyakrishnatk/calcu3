function display(num){
    inpuText.value += num;
}

function clearAll(){
    inpuText.value="";
}

function Result(){
    inpuText.value=eval(inpuText.value)
}

function removeLast(){
    currentExp=inpuText.value;
    inpuText.value=currentExp.slice(0,-1);
}