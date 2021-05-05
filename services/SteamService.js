import { baseService } from './BaseService';

// IMPLEMENTING METHODS
class steamService extends baseService{
    getSomething = (url) => {
        return this.get(url)
    }
}

export const SteamService = new steamService();