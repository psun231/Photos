import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 543e0d8c859012181d962d4dc6ebb8ed4b305591bf8512a38ad603ef2f8c0869'

    }
});