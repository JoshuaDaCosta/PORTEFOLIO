

    var iniciolink=document.querySelector("#iniciolink")
    var trabalhoslink=document.querySelector("#trabalhoslink")

    var inicio=document.querySelector("#inicio")
    var tracocima=document.querySelector(".cima")
    var tracobaixo=document.querySelector(".baixo")
    var iconeinicio=document.getElementById('iconeinicio')

    iconeinicio.addEventListener('click', function(){
        inicio.style.display="flex"
        trabalhos.style.display="none"
        tracocima.style.width="40%"
        tracobaixo.style.width="40%"

    })
    iniciolink.addEventListener("click", function(){
        inicio.style.display="flex"
        trabalhos.style.display="none"
        tracocima.style.width="70%"
        tracobaixo.style.width="70%"

    })
    trabalhoslink.addEventListener("click", function(){
        inicio.style.display="none"
        trabalhos.style.display="flex"
        tracocima.style.width="76%"
        tracobaixo.style.width="76%"

    })