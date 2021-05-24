function num(a){
    document.getElementById('screen').value += a
}

function empty(){
    document.getElementById('screen').value = "";
}

function result(){
    var reslt = document.getElementById("screen")
    reslt.value = eval(reslt.value)
}