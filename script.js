

function insert(num) {

    let res = document.getElementById(`res`)
    let ultimoSlot = res.innerHTML[res.innerHTML.length-1]

    if(res.innerHTML == `` && num == `*` || res.innerHTML == `` && num == `/` || res.innerHTML == `+` && num == `*` || res.innerHTML == `+` && num == `/` || res.innerHTML == `-` && num == `*` || res.innerHTML == `-` && num == `/`) {
        return
    } else
    
    if(ultimoSlot == `+` && num == `+` || ultimoSlot == `+` && num == `-` || ultimoSlot == `+` && num == `*` || ultimoSlot == `+` && num == `/`) {
        back()
        res.innerHTML += num
        
    }  else if(ultimoSlot == `-` && num == `+` || ultimoSlot == `-` && num == `-` || ultimoSlot == `-` && num == `*` || ultimoSlot == `-` && num == `/`) {
        back()
        res.innerHTML += num
        
    } else if(ultimoSlot == `*` && num == `+` || ultimoSlot == `*` && num == `-` || ultimoSlot == `*` && num == `*` || ultimoSlot == `*` && num == `/`) {
        back()
        res.innerHTML += num
        
    } else if(ultimoSlot == `/` && num == `+` || ultimoSlot == `/` && num == `-` || ultimoSlot == `/` && num == `*` || ultimoSlot == `/` && num == `/`) {
        back()
        res.innerHTML += num
        
    } else {

       res.innerHTML += num

    }

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
        document.getElementById(`res`).innerHTML = eval(res)
    } else {
        
    }
}