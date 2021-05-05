import Axios from 'axios';
import { DOMAIN } from '../util/constants/systemSettings';

// BASIC METHODS
export class baseService {
    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET'
        })
    }
}