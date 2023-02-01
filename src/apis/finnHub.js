import axios from 'axios';

const TOKEN = 'cfd5c01r01qs3nql32hgcfd5c01r01qs3nql32i0';

export default axios.create({
    baseURL: 'https://finnhub.io/api/v1',
    params: {
        token: TOKEN,
    }
});
