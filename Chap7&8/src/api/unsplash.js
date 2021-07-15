import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID cL1RKU-czU5nqrjlgg-tecWHgkCAlzDwUk0PBoZ5Hik'
    }
});