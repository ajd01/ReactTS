const axios = require("axios");

const apiKey: string = '1523956d'

const searchMovies = async (search: string): Promise<object> => {
    const result = await axios({
        "method":"GET",
        "url":`http://www.omdbapi.com/?s=${search}&plot=full&apikey=${apiKey}`
    })
    console.log(result)
    return {}
}

const getMovie = (title: string) => {
    axios({
        "method":"GET",
        "url":`http://www.omdbapi.com/?t=${title}&plot=full&apikey=${apiKey}`
    })
    .then((response: any)=>{
      console.log(response)
      return response
    })
    .catch((error: any)=>{
      console.log(error)
      return error
    })
}

export {
    searchMovies,
    getMovie
}