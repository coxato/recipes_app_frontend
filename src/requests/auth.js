import ajax from './ajax';
import { API_BASE_URL } from '../config';



const authRequests = {};

authRequests.login = async function ({ email, password }) {

    const url = `${API_BASE_URL}/users/login`;
    const sessionData = await ajax.post(url, {
        email, password
    });
    return sessionData;
}

authRequests.register = async function ({
    email, password, firstName, lastName
}){
    const url = `${API_BASE_URL}/users/register`;

    const sessionData = await ajax.post(url, {
        email, password, firstName, lastName
    });
    return sessionData;
}


export default authRequests;
