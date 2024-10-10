function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function validUsername(username) {
    return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username)
}

module.exports = { capitalizeFirstLetter, validUsername }