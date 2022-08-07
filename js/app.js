let miBoton = document.querySelector('#send')
let input = document.getElementById('text')

function namee() {
    let miUser = input.value
    localStorage.setItem('nombre', miUser)
}

miBoton.addEventListener("click",namee)







