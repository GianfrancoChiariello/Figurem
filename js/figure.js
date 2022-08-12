let arrayTriangulo = { id: 1, nombre: "triangulo", categoria: "isosceles", imgUrl: "../images/figuras/foto1.png" }
let arrayCuadrado = { id: 2, nombre: "cuadrado", categoria: "bloque", imgUrl: "../images/figuras/foto2.png" }
let arrayCirculo = { id: 3, nombre: "circulo", categoria: "circular", imgUrl: "../images/figuras/foto3.png" }
let arrayRectangulo = { id: 4, nombre: "rectangulo", categoria: "rectangular", imgUrl: "../images/figuras/foto4.png" }

let cardContaniner = document.querySelector(".card-contaniner-sub")



let nav = document.querySelector(".nav-sub")

nav.innerHTML = `<h1>Seleccionar figura para calcular su <span>area</span>
                    <div class="containerFigure-sub">
                    <img class="imgTriangulo" src="${arrayTriangulo.imgUrl}">
                    <img class="imgCuadrado"  src="${arrayCuadrado.imgUrl}">
                    <img class="imgCirculo"  src="${arrayCirculo.imgUrl}">
                    <img class="imgRectangulo"  src="${arrayRectangulo.imgUrl}">
                    </div>`

cardContaniner.innerHTML = `<img src="../images/figuraGeoilus.png">`



let imgTriangulo = document.querySelector(".imgTriangulo")
imgTriangulo.addEventListener("click", trianguloArea)

let imgCuadrado = document.querySelector(".imgCuadrado")
imgCuadrado.addEventListener("click", cuadradoArea)

let imgCirculo = document.querySelector(".imgCirculo")
imgCirculo.addEventListener("click", circuloArea)

let imgRectangulo = document.querySelector(".imgRectangulo")
imgRectangulo.addEventListener("click", rectanguloArea)


function trianguloArea() {
    cardContaniner.innerHTML = `<div class="one-sect">
                                <h3> ${arrayTriangulo.nombre} </h3>
                                <img src="${arrayTriangulo.imgUrl}">
                                <p>Base: <input id="baseTriangle" type="number" placeholder="Ingrese base"></p>
                                <p>Altura: <input id="alturaTriangle" type="number" placeholder="Ingrese altura"></p>
                                <p>Resultado: <input id="resultTriangle" type="text" placeholder="Resultado"></p>
                                <button class="btnTriangle">Enviar</button>
                                <button class="btnDelete">Borrar</button>
                                </div>
                                <span></span>
                                <div class="two-sect">
                                <h4>¿Como calculamos el area del ${arrayTriangulo.nombre}?</h4>
                                <p>El área o superficie de un triángulo cualquiera es igual al producto de la base por la altura dividido por dos. (La vamos a representar por S en lugar de por A para evitar coincidencias con el vértice A).</p>        
                                <img src="../images/formulas/triangle/formula.png">
                                </div>`

    let btnTriangle = document.querySelector(".btnTriangle")
    btnTriangle.addEventListener("click", resultadoTriangle)
    
    let btnDelete = document.querySelector(".btnDelete")
    btnDelete.addEventListener("click", () => {
        trianguloArea()
    })

    function resultadoTriangle() {
        let base = parseInt(baseTriangle.value)
        let altura = parseInt(alturaTriangle.value)
        var resultado = (base * altura) / 2;

        if (resultado) {
            resultTriangle.value = (resultado)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar los datos!',
            })
        }
    }
}

function cuadradoArea() {
    cardContaniner.innerHTML = `<div class="one-sect">
                                <h3> ${arrayCuadrado.nombre} </h3>
                                <img src="${arrayCuadrado.imgUrl}">
                                <p>Base: <input id="baseCuadrado" type="number" placeholder="Ingrese base"></p>
                                <p>Resultado:<input id="resultCuadrado" type="text" placeholder="Resultado"></p>
                                <button class="btnCuadrado">Enviar</button>
                                <button class="btnDelete">Borrar</button>
                                </div>
                                <span></span>
                                <div class="two-sect">
                                <h4>¿Como calculamos el area del ${arrayCuadrado.nombre}?</h4>
                                <p>Un cuadrado es definido como una figura 2D que tiene cuatro lados de igual longitud. Un cuadrado es un tipo especial de rectángulo, ya que todos sus ángulos internos miden 90°.</p>
                                <img src="../images/formulas/cuadrado/formula.png">
                                </div>`

    let btnCuadrado = document.querySelector(".btnCuadrado")
    btnCuadrado.addEventListener("click", resultadoCuadrado)

    let btnDelete = document.querySelector(".btnDelete")
    btnDelete.addEventListener("click", ()=>{
        cuadradoArea()
    })

    function resultadoCuadrado() {
        let base = parseInt(baseCuadrado.value)
        var resultado = (base * 2)

        if (resultado) {
            resultCuadrado.value = (resultado)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar los datos!',
            })
        }
    }
}

function circuloArea() {
    cardContaniner.innerHTML = `<div class="one-sect">
                                <h3> ${arrayCirculo.nombre} </h3>
                                <img src="${arrayCirculo.imgUrl}">
                                <p>base: <input id="radioCirculo" type="number" placeholder="Ingrese radio"></p>
                                <p>Resultado:<input id="resultCirculo" type="text" placeholder="Resultado"></p>
                                <button class="btnCirculo">Enviar</button>
                                <button class="btnDelete">Borrar</button>
                                </div>
                                <span></span>
                                <div class="two-sect">
                                <h4>¿Como calculamos el area del ${arrayCirculo.nombre}?</h4>
                                <p>El área de un círculo es pi multiplicado por el radio al cuadrado (A = π r²). Aprende cómo utilizar esta fórmula para calcular el área de un círculo cuando el diámetro está dado.</p>
                                <img src="../images/formulas/circulo/formula.png">
                                </div>`
                                

    let btnCirculo = document.querySelector(".btnCirculo")
    btnCirculo.addEventListener("click", resultadoCirculo)

    let btnDelete = document.querySelector(".btnDelete")
    btnDelete.addEventListener("click",()=>{
        circuloArea()
    })

    function resultadoCirculo() {
        let radio = parseInt(radioCirculo.value)
        var resultado = (obtenerPi() * (radio) * 2)

        if (resultado) {
            resultCirculo.value = (resultado)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar los datos!',
            })
        }
    }

    function obtenerPi() {
        return 3.144;
    }
}


function rectanguloArea() {
    cardContaniner.innerHTML = `<div class="one-sect">
                                <h3> ${arrayRectangulo.nombre} </h3>
                                <img src="${arrayRectangulo.imgUrl}">
                                <p>Base: <input id="baseRectangulo" type="number" placeholder="Ingrese base"></p>
                                <p>Altura: <input id="alturaRectangulo" type="number" placeholder="Ingrese altura"></p>
                                <p>Resultado:<input id="resultRectangulo" type="text" placeholder="Resultado"></p>
                                <button class="btnRectangulo">Enviar</button>
                                <button class="btnDelete">Borrar</button>
                                </div>
                                <span></span>
                                <div class="two-sect">
                                <h4>¿Como calculamos el area del ${arrayRectangulo.nombre}?</h4>
                                <p>El área de un rectángulo es igual a la base del rectángulo por la altura del rectángulo.
                                A diferencia del cuadrado, los lados del rectángulo son iguales dos a dos, por lo tanto, tenemos que multiplicar su base por su altura para calcular el área del rectángulo.</p>
                                <img src="../images/formulas/rectangulo/formula.png">
                                </div>`

    let btnRectangulo = document.querySelector(".btnRectangulo")
    btnRectangulo.addEventListener("click", resultadoRectangulo)

    let btnDelete = document.querySelector(".btnDelete")
    btnDelete.addEventListener("click",()=>{
        rectanguloArea()
    })


    function resultadoRectangulo() {
        let base = parseInt(baseRectangulo.value)
        let altura = parseInt(alturaRectangulo.value)
        var resultado = (base * altura)

        if (resultado) {
            resultRectangulo.value = (resultado)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar los datos!',
            })
        }
    }
}