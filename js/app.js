let miBoton = document.querySelector('#send')
let input = document.getElementById('text')
let button = document.querySelector('.send')

function namee() {
    let miUser = input.value
    localStorage.setItem('nombre', miUser)

    if (miUser) {
        button.addEventListener("click",()=>{
            window.location.href = "./pages/subMain.html";
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar los datos!',
        })
    }
}

miBoton.addEventListener("click",namee)



///////////////////////////////////







