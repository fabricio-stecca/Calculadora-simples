

function insert(num) {

    let res = document.getElementById(`res`)
    let ultimoSlot = res.innerHTML[res.innerHTML.length-1]

    
    //Condição para inserção de vírgulas

    if(ultimoSlot == `+` && num == `.` || ultimoSlot == `+` && num == `.` || ultimoSlot == `+` && num == `.` || ultimoSlot == `+` && num == `.`) {

        res.innerHTML += `0${num}`

    } else if(ultimoSlot == `-` && num == `.` || ultimoSlot == `-` && num == `.` || ultimoSlot == `-` && num == `.` || ultimoSlot == `-` && num == `.`)  {

        res.innerHTML += `0${num}`

    } else if(ultimoSlot == `*` && num == `.` || ultimoSlot == `*` && num == `.` || ultimoSlot == `*` && num == `.` || ultimoSlot == `*` && num == `.`)  {

        res.innerHTML += `0${num}`

    } else if(ultimoSlot == `/` && num == `.` || ultimoSlot == `/` && num == `.` || ultimoSlot == `/` && num == `.` || ultimoSlot == `/` && num == `.`)  {

        res.innerHTML += `0${num}`

    } else if(ultimoSlot == `.` && num == `.` || ultimoSlot == `.` && num == `+` || ultimoSlot == `.` && num == `-` || ultimoSlot == `.` && num == `*` || ultimoSlot == `.` && num == `/`)  {

        return

    } else if (res.innerHTML == `` && num == `.`) {

        res.innerHTML += `0${num}`
    }

    //Condição da inserção das operações
    
    else if(res.innerHTML == `` && num == `*` || res.innerHTML == `` && num == `/` || res.innerHTML == `+` && num == `*` || res.innerHTML == `+` && num == `/` || res.innerHTML == `-` && num == `*` || res.innerHTML == `-` && num == `/`) {
        
        return

    } else if(ultimoSlot == `+` && num == `+` || ultimoSlot == `+` && num == `-` || ultimoSlot == `+` && num == `*` || ultimoSlot == `+` && num == `/`) {
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
        
    } 

    // Inserção normal dos números
    
    else {

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
    let res = document.getElementById(`res`).innerHTML
    let ultimoSlot = res[res.length-1]

    if(res == ``) {
        return

    } else if (res == `.` || res == `+` || res == `-`) {

       back()

    } else if (ultimoSlot == `.` || ultimoSlot == `+` || ultimoSlot == `-` || ultimoSlot == `*` || ultimoSlot == `/`) {

        back()
        document.getElementById(`res`).innerHTML = eval(document.getElementById(`res`).innerHTML)
    }  else {
    
    document.getElementById(`res`).innerHTML = eval(res)

    }
  
}