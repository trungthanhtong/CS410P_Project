import Axios from 'axios';
import { STEAM_DOMAIN } from '../util/constants/systemSettings';

// BASIC METHODS
export class baseService {
    get = (url) => {
        return Axios({
            url: `${STEAM_DOMAIN}/${url}`,
            method: 'GET'
        })
    }
}