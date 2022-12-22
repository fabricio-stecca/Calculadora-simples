let zero = document.getElementById(`zero`)
let um = document.getElementById(`um`)
let dois = document.getElementById(`dois`)
let tres = document.getElementById(`tres`)
let quatro = document.getElementById(`quatro`)
let cinco = document.getElementById(`cinco`)
let seis = document.getElementById(`seis`)
let sete = document.getElementById(`sete`)
let oito = document.getElementById(`oito`)
let nove = document.getElementById(`nove`)


function insert(num) {

    document.getElementById(`res`).innerHTML += num

}

function clean() {
    document.getElementById(`res`).innerHTML = ``
}

function back() {
    var res = document.getElementById(`res`).innerHTML

    document.getElementById(`res`).innerHTML = res.substring(0, res.length -1)
}

function calcular() {
    var res = document.getElementById(`res`).innerHTML

    if(res) {
        var res = document.getElementById(`res`).innerHTML = eval(res)
    } else {
        
    }
}