const USERNAME = "piccininigiovanni97"
const PASSWORD = "TfLBhkgqKEoDCIPA"
const JWT_SECRET_KEY = "caoVdrFFoSjXTbuK701OnaZWE2c8SSpr"
const GUEST_JWT_SECRET_KEY = "jaoRh29sZmkFle91Okse829ST7vbqsS"
//const DB_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@doculabeler1.povvzr6.mongodb.net/?retryWrites=true&w=majority`
const DB_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/'

module.exports = {
    JWT_SECRET_KEY,
    DB_CONNECTION_STRING,
    GUEST_JWT_SECRET_KEY
}
