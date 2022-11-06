async function GetAPI(url){

    const response = await fetch(url)
    const responseData = await response.json()
    return responseData

}


async function PostEmAPI(url,body){
    const fetchResposta = await fetch(url,{
         method: 'POST',
         body: json.stringify(body),
         headers: {'Content-Type': 'application/json'}
    })
    const respostaEmJson = await fetchRespost.json()
    return respostaEmJson
}


//https://api-dwi.herokuapp.com/api/tutorials

module.exports = {GetAPI,PostEmAPI} 