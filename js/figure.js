fetch('../js/data.json')
    .then((respuesta) => respuesta.json())
    .then((figuras) => {
        const triangulo = figuras[0]
        const cuadrado = figuras[1]
        const circulo = figuras[2]
        const rectangulo =  figuras[3]




    function localRestore() { 
        let store = localStorage.getItem("result")
        historyContainer.innerHTML =   `<h4>Historial</h4>
                                        <div class="box-result"><span>${store}</span></div>`  
    }

    function pushedResults(resultado) {
        resultados.unshift(resultado)
        historyContainer.innerHTML =   `<h4>Historial</h4>
                                        <div class="box-result"><span>${resultados.join("<br>")}</span></div>`
    }


    let nav = document.querySelector(".nav-sub")
    nav.innerHTML = `<h1>Seleccionar figura para calcular su <span>area</span>
                        <div class="containerFigure-sub">
                            <img class="imgTriangulo" src="${triangulo.imgUrl}">
                            <img class="imgCuadrado"  src="${cuadrado.imgUrl}">
                            <img class="imgCirculo"  src="${circulo.imgUrl}">
                            <img class="imgRectangulo"  src="${rectangulo.imgUrl}">
                        </div>`

    let cardContaniner = document.querySelector(".card-contaniner-sub")
    cardContaniner.innerHTML = `<img src="../images/figuraGeoilus.png">`

    let historyContainer = document.querySelector("#history-container")

    let imgTriangulo = document.querySelector(".imgTriangulo")
    imgTriangulo.addEventListener("click", trianguloArea)

    let imgCuadrado = document.querySelector(".imgCuadrado")
    imgCuadrado.addEventListener("click", cuadradoArea)

    let imgCirculo = document.querySelector(".imgCirculo")
    imgCirculo.addEventListener("click", circuloArea)

    let imgRectangulo = document.querySelector(".imgRectangulo")
    imgRectangulo.addEventListener("click", rectanguloArea)

    let resultados = []   /* local storage */

    function trianguloArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${triangulo.nombre} </h3>
                                    <img src="${triangulo.imgUrl}">
                                    <p>Base: <input id="baseTriangle" type="number" placeholder="Ingrese base"></p>
                                    <p>Altura: <input id="alturaTriangle" type="number" placeholder="Ingrese altura"></p>
                                    <p>Resultado: <input id="resultTriangle" type="text" placeholder="Resultado"></p>
                                    <button class="btnTriangle">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${triangulo.nombre}?</h4>
                                    <p>El área o superficie de un triángulo cualquiera es igual al producto de la base por la altura dividido por dos. (La vamos a representar por S en lugar de por A para evitar coincidencias con el vértice A).</p>        
                                    <img src="../images/formulas/triangle/formula.png">
                                    </div>`



        let btnTriangle = document.querySelector(".btnTriangle")
        btnTriangle.addEventListener("click", resultadoTriangle)
        
        let btnDelete = document.querySelector(".btnDelete")
        btnDelete.addEventListener("click", () => {
            trianguloArea()
        })

        localRestore();
        
        
        function resultadoTriangle() {
            let base = parseInt(baseTriangle.value)
            let altura = parseInt(alturaTriangle.value)
            var resultado = (base * altura) / 2;


            localStorage.setItem("result",resultados.join("<br>"))


            if (resultado > 0) {
                resultTriangle.value = resultado
                pushedResults(resultado)
            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese base y altura!',
                })
            }
        }


    }



    function cuadradoArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${cuadrado.nombre} </h3>
                                    <img src="${cuadrado.imgUrl}">
                                    <p>Base: <input id="baseCuadrado" type="number" placeholder="Ingrese base"></p>
                                    <p>Resultado:<input id="resultCuadrado" type="text" placeholder="Resultado"></p>
                                    <button class="btnCuadrado">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${cuadrado.nombre}?</h4>
                                    <p>Un cuadrado es definido como una figura 2D que tiene cuatro lados de igual longitud. Un cuadrado es un tipo especial de rectángulo, ya que todos sus ángulos internos miden 90°.</p>
                                    <img src="../images/formulas/cuadrado/formula.png">
                                    </div>`

        let btnCuadrado = document.querySelector(".btnCuadrado")
        btnCuadrado.addEventListener("click", resultadoCuadrado)

        let btnDelete = document.querySelector(".btnDelete")
        btnDelete.addEventListener("click", ()=>{
            cuadradoArea()
        })

        localRestore();

        function resultadoCuadrado() {
            let base = parseInt(baseCuadrado.value)
            var resultado = (base * 2)

            localStorage.setItem("result",resultados.join("<br>"))

            if (resultado > 0) {
                resultCuadrado.value = resultado
                pushedResults(resultado)
            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese base!',
                })
            }
        }
    }

    function circuloArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${circulo.nombre} </h3>
                                    <img src="${circulo.imgUrl}">
                                    <p>Radio: <input id="radioCirculo" type="number" placeholder="Ingrese radio"></p>
                                    <p>Resultado:<input id="resultCirculo" type="text" placeholder="Resultado"></p>
                                    <button class="btnCirculo">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${circulo.nombre}?</h4>
                                    <p>El área de un círculo es pi multiplicado por el radio al cuadrado (A = π r²). Aprende cómo utilizar esta fórmula para calcular el área de un círculo cuando el diámetro está dado.</p>
                                    <img src="../images/formulas/circulo/formula.png">
                                    </div>`
                                    

        let btnCirculo = document.querySelector(".btnCirculo")
        btnCirculo.addEventListener("click", resultadoCirculo)

        let btnDelete = document.querySelector(".btnDelete")
        btnDelete.addEventListener("click",()=>{
            circuloArea()
        })

        localRestore();

        function resultadoCirculo() {
            let radio = parseInt(radioCirculo.value)
            var resultado = (obtenerPi() * (radio) * 2)

            localStorage.setItem("result",resultados.join("<br>"))

            if (resultado > 0) {
                resultCirculo.value = resultado
                pushedResults(resultado)
            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese radio!',
                })
            }
        }

        function obtenerPi() {
            return 3.144;
        }
    }

    function rectanguloArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${rectangulo.nombre} </h3>
                                    <img src="${rectangulo.imgUrl}">
                                    <p>Base: <input id="baseRectangulo" type="number" placeholder="Ingrese base"></p>
                                    <p>Altura: <input id="alturaRectangulo" type="number" placeholder="Ingrese altura"></p>
                                    <p>Resultado:<input id="resultRectangulo" type="text" placeholder="Resultado"></p>
                                    <button class="btnRectangulo">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${rectangulo.nombre}?</h4>
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

        localRestore();


        function resultadoRectangulo() {
            let base = parseInt(baseRectangulo.value)
            let altura = parseInt(alturaRectangulo.value)
            var resultado = (base * altura)

            

            if (resultado > 0) {
                resultRectangulo.value = resultado
                pushedResults(resultado)
            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese base y altura!',
                })
            }
        }
    }
})