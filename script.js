const inputQuantidade = document.getElementById("quantidade");

const inputMIn = document.getElementById("min");
const inputMax = document.getElementById("max");

const resultado = document.querySelector(".res");

const content = document.getElementById("conteudo");

const sortear = () =>{

    content.innerHTML = ""

    if(inputQuantidade.value === "" || inputMIn.value === "" || inputMax.value === ""){
        alert("erro");

    }else{
        let maxNumber = Number(inputMax.value);
        let minNumber = Number(inputMIn.value);

        const Subquantidade = Number(inputQuantidade.value);

        for(let c = 0; c < Subquantidade; c++){
            function criarElement(tag, classe, conteudo){
                const elemento = document.createElement(tag);
                elemento.classList.add(classe);
                elemento.innerText = conteudo;
                
                return elemento
            }

            let subRes = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

            let elementoPai = content;

            let filho = criarElement("div", "res", subRes);

            elementoPai.appendChild(filho);
        }
    }

    
}