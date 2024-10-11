const { sendRequest } = require("./request");
const { parseData } = require('./parse-data');
const { validUsername } = require("./utils")


async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.error('No arguments provided');
        return
    }
    
    const username = args[0];
    if (!validUsername(username)) return console.error("[!] Bad username.")

    try{
        let data = await sendRequest(username);
        const d = parseData(data)

        console.log(d.join("\n"))

    } catch(e){
        console.log(e.message)
    }
}

main()