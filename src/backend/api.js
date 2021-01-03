const { default: axios } = require("axios");

const BACKEND_PORT = 41554
const BACKEND_HOST = window.location.host;
const BACKEND_ORIGIN = `${BACKEND_HOST}:${BACKEND_PORT}`

module.exports.getEntries = () => {
    return axios.get(`${BACKEND_ORIGIN}/entries`)
}

module.exports.getEntry = key => {
    return axios.get(`${BACKEND_ORIGIN}/entries/${key}`);
}

module.exports.setEntry = ({key, val}) => {
    return axios.post(`${BACKEND_ORIGIN}/entries/${key}`, val);
}
