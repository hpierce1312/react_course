import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WhiNUkgE95vBx8HrpNd_OXbB6Q_VIzApp_h4JLwAkjg' 
    }
});