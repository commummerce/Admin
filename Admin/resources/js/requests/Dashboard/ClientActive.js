import axios from "axios";

const clientActiveGet = async () => {
    const token = localStorage.getItem('jwt_token');
    const url = "/api/auth/dashboard/client/active";
    const body = {};

    const headers = {
        "Authorization": "Bearer " + token
    }

    const response = await axios({
        method: 'post',
        url: url,
        data: body,
        headers: headers
    });

    return response;
}

export default clientActiveGet;
