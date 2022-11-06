import "../scss/style.scss"

const dados_API = require("../js/dados_API.js")
const dados_tela = require("../js/dados_tela.js")

dados_tela.adiciona_add_event_listener("#Atualiza_dados","click",busca_lista)

async function busca_lista() {   
    const getAPI = await dados_API.GetAPI("https://api-dwi.herokuapp.com/api/tutorials")
    dados_tela.monta_lista(getAPI,"#Lista_curso")

}

busca_lista()