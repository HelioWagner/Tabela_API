import "../scss/gerencia.scss"

const dados_API = require("../js/dados_API.js")
const dados_tela = require("../js/dados_tela.js")

dados_tela.adiciona_add_event_listener("#Botao_Cadastro","click",busca_lista)

async function busca_lista() {   
    const titulo    = dados_tela.busca_dados_informados("#Titulo")
    const descricao = dados_tela.busca_dados_informados("#Descricao")
    console.log(titulo+' '+descricao)
    dados_API.PostEmAPI("https://api-dwi.herokuapp.com/api/tutorials",{
        title: "C#",
        description: "Target"
      })
    // const getAPI = await dados_API.GetAPI("https://api-dwi.herokuapp.com/api/tutorials")
   // dados_tela.monta_lista(getAPI,"#Lista_curso")

}
