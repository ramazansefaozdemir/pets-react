import axios from 'axios';


let RestConstants = (function () {
    let baseUrl = process.env.REACT_APP_BASE_URL;

    const HttpMethods = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    };

    const ajax = (url, body, method) => {
        return axios({
            method: method || "GET",
            url: baseUrl + url,
            headers: url === '/token' ? 
                {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                } : 
                {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Accept-Language': 'tr-TR'
                },
            data: body,
        }).catch(err => {
            const message = err.message;
            const statusCode = err.response ? err.response.status : 500;
            const response = err.response;
            return Promise.reject({message, statusCode, response});
        })
    };

    const jFetch = (url) => {
        return ajax(url);
    };

    const jDelete = (url, body) => {
        return ajax(url, body, HttpMethods.DELETE);
    };

    const jPut = (url, body) => {
        return ajax(url, body, HttpMethods.PUT);
    };

    const jPost = (url, body) => {
        return ajax(url, body, HttpMethods.POST);
    };

    return {
        baseUrl: baseUrl,
        jDelete: jDelete,
        jPost: jPost,
        jPut: jPut,
        jFetch: jFetch,
    }
})();

export default RestConstants;
