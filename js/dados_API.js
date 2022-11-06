async function GetAPI(url){

    const response = await fetch(url)
    const responseData = await response.json()
    return responseData

}


async function PostEmAPI(url,inputTitleValue,inputDescriptionValue){
    const fetchOptions = {
        method: "POST",
        body: JSON.stringify({
          title: inputTitleValue,
          description: inputDescriptionValue
        }),
        headers: {"Content-type": "application/json"}
      }
      const response = await fetch(url, fetchOptions)
     // console.log(response)
      const responseData = await response.json()
     // console.log("responseData"+JSON.stringify(responseData))
      //JSON.stringify(responseData)
      return  responseData

}


//https://api-dwi.herokuapp.com/api/tutorials

module.exports = {GetAPI,PostEmAPI} 