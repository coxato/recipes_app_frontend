import axios from 'axios';


const request = {};

const manageResponse = responseDataObj => {
    const { error, body, status } = responseDataObj;

    if (error) {
        console.error(`${body} \nstatus: ${status}`);
        throw new Error(body);
    }

    return body;
}


request.get = async function (url) {
    try {
        const { data } = await axios.get(url);
        return manageResponse(data);

    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
}



request.post = async function (url, dataToSend) {
    try {
        const { data } = await axios.post(url, dataToSend);
        return manageResponse(data);

    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
}

export default request;