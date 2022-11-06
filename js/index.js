import "../scss/style.scss"

const dados_API = require("../js/dados_API.js")
const dados_tela = require("../js/dados_tela.js")

dados_tela.adiciona_add_event_listener("#Atualiza_dados","click",busca_lista)
dados_tela.adiciona_add_event_listener("#marca_registro","click",destaca_registro)

async function busca_lista() {   
    const getAPI = await dados_API.GetAPI("https://api-dwi.herokuapp.com/api/tutorials")
    dados_tela.monta_lista(getAPI,"#Lista_curso")

}

async function destaca_registro() {   
    const titulo    = dados_tela.busca_dados_informados("#texto_titulo",'N')
    let dados_Lista = document.querySelectorAll(".card_principal__Lista__itens")

    dados_Lista.forEach(element => {
        
        if (titulo == element.innerText) {
            element.style.background = "lightgreen";
            element.style.color = "red";
        }
        else{
            element.style.background = "white";
            element.style.color = "black";
        }
        
      });
    
    

}

busca_lista()