const axios = require("axios")

async function sendRequest(username) {
    try {
        let res = await axios.get(`https://api.github.com/users/${username}/events/public?per_page=5`)
        return res.data
    } catch (e) {
        if (e.response) {
            if (e.response.status == 404) {
                throw new Error("[!] Username is not valid.")
            } else {
                throw new Error(`[!] Invalid status: ${res.status}\nMessage: ${JSON.stringify(res.data)}`)
            }
        } else {
            throw new Error("[!] Github api did not respond, please try later.")
        }
    }
}

module.exports = { sendRequest }