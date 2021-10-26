//fetches response from API that gets gif
export const get_gif = async (search_term, lim) => {
    const max = lim
    const url = `https://g.tenor.com/v1/search?q=${search_term}&key=${process.env.REACT_APP_TENOR_GIF_API_KEY}&limit=${max}`;
    var res_url = ""
    await fetch(url, {})
    // .then controls what is done when a promise is resolved
    .then(res => res.json()) // converts response into javascript object/array i.e. you can index it
    .then(data => { //res.json() is now data
        // console.log(data)
        res_url = data["results"][Math.floor(Math.random() * (max + 1))]["media"][0]["tinygif"]["url"]
    })
    .catch(err => {
        console.log(err)
    })
    return res_url
}