const form = document.querySelector("form")
const resp = document.querySelector("pre")

//ouvinte
form.addEventListener("submit" , (e) =>{
     e.preventDefault()

     const numero = Number(form.inNúmero.value)
     let resposta = ""

     for(let i =1; i <= 10; i++){
        resposta = resposta + número + " x " + i + " = " + (número * i) + "/n"
     }
     resp.innerText = resposta

})