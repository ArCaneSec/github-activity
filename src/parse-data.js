const { capitalizeFirstLetter } = require("./utils")

const FinalData = []

function parseData(data) {
    for (const event of data) {
        console.log(data)
        switch (event.type) {
            case "PushEvent":
                FinalData.push(`Pushed ${event.payload.size} ${event.payload.size > 1 ? "commits" : "commit"} to ${event.repo.name} on ${event.created_at}`)
                break

            case "WatchEvent":
                FinalData.push(`Starred ${event.repo.name} on ${event.created_at}`)
                break

            case "IssuesEvent":
                FinalData.push(`${capitalizeFirstLetter(event.payload.action)} an issue in ${event.repo.name} on ${event.created_at}`)
                break

            case "PublicEvent":
                FinalData.push(`Made ${event.repo.name} public on ${event.created_at}`)
                break

            case "ForkEvent":
                FinalData.push(`Forked ${event.repo.name} on ${event.created_at}`)
                break

            case "PullRequestEvent":
                FinalData.push(`${capitalizeFirstLetter(event.payload.action)} a pull request ${event.repo.name} on ${event.created_at}`)
                break

            case "CreateEvent":
                FinalData.push(`Created a new ${event.payload.ref_type} in ${event.repo.name} on ${event.created_at}`)
                break

            case "DeleteEvent":
                FinalData.push(`Deleted a ${event.payload.ref_type} in ${event.repo.name} on ${event.created_at}`)
                break
        }
    }

    return FinalData
}

module.exports = { parseData }