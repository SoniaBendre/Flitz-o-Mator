//fetches response from API that checks compatibility based on names
export const name_check = async (fname, sname) => {
    let first_name = fname;
    let second_name = sname;
    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${first_name}&fname=${second_name}`;
    const host = "love-calculator.p.rapidapi.com"
    var response = ""
    await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${host}`,
            "x-rapidapi-key": `${process.env.REACT_APP_LOVE_NAME_API_KEY}`
        }})
    // .then controls what is done when a promise is resolved
    .then(res => res.json()) // converts response into javascript object/array i.e. you can index it
    .then(data => { //res.json() is now data
        response = data["percentage"]
    })
    .catch(err => {
        console.log(err)
    })
    return response
}

