import axios from 'axios'

export default() => {
    return axios.create({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}