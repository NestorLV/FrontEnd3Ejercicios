import axios from 'axios';
export default axios.create({
    baseURL: `http://autosdelsiglo22.com/`,
    headers: { 'X-Custom-Header': 'foobar' }
});