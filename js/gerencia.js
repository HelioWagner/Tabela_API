import "../scss/gerencia.scss"

const dados_API = require("../js/dados_API.js")
const dados_tela = require("../js/dados_tela.js")

dados_tela.adiciona_add_event_listener("#Botao_Cadastro","click",Grava_dados)

async function Grava_dados() {   
    //BUSCA DADOS ENVIADOS
    const titulo    = dados_tela.busca_dados_informados("#Titulo",'S')
    const descricao = dados_tela.busca_dados_informados("#Descricao",'S')
    //ENVIA DADOS PARA API
    const retorno = await dados_API.PostEmAPI("https://api-dwi.herokuapp.com/api/tutorials",titulo,descricao)
    //RESTORNO ENVIO PARA API 
    dados_tela.Informa_dados_tag("#Retorno_cadastro",retorno.id)
    // const getAPI = await dados_API.GetAPI("https://api-dwi.herokuapp.com/api/tutorials")
   // dados_tela.monta_lista(getAPI,"#Lista_curso")

}
