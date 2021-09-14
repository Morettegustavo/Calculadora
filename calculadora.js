function insert(num){
    let res = document.getElementById('resultado')
    document.getElementById('resultado').innerHTML += num
}

function limpar(){
    document.getElementById('resultado').innerHTML = ""
}

function voltar(){
    let res = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1)
}

function calcular(){
    let res = window.document.getElementById('resultado').innerHTML
    if(res){
        document.getElementById('resultado').innerHTML = eval(res)
    }
}