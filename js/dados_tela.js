function adiciona_add_event_listener(tag,evento,funcao){
    document.querySelector(tag).addEventListener(evento, funcao)
}

function busca_dados_informados(tag,valida) {
    dados = document.querySelector(tag).value
    if (valida == 'S')
       valida_dados(dados)
    return dados
}

function Informa_dados_tag(tag,retorno_api) {
   dados = document.querySelector(tag)
   console.log(retorno_api)
   if (Number(retorno_api) > 0  ){
      dados.innerHTML = 'Cadastro realizado com sucesso'
      dados.style.color = "#045344";  
    }
    else{
        dados.innerHTML = 'Cadastro realizado com erro'
        dados.style.color = "#fa0a0a"  
    }    
}

function valida_dados(dados_entrada) {
    if ((dados_entrada == '')) {
     alert("Os campo Título e Descrição deve ser informado.")
     abort()
    }  
 }
 

function monta_lista(resultado,tag) {
   
    dados = document.querySelector(tag)
    const cabecalho = '<tr> <th class="card_principal__Lista__itens" >Título</th>'+
                      '<th class="card_principal__Lista__itens">Descrição</th></tr>'      

    
    let linhas =""

    resultado.forEach( elemento => {
        linhas += `<tr>
                   <td class="card_principal__Lista__itens card_principal__titulo">${elemento.title}</td>  
                   <td class="card_principal__Lista__itens">${elemento.description}</td>                 
                   </tr>` 
    })
    
    //console.log(linhas)

    dados.innerHTML = cabecalho+linhas
}


module.exports = {adiciona_add_event_listener,busca_dados_informados,monta_lista,Informa_dados_tag} 