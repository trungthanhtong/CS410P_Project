import { baseService } from './BaseService';

// IMPLEMENTING METHODS
class steamService extends baseService{
    getMostPlayedGames = (limit) => {
        return this.get(`game/most-played/${limit}`)
    }
    
    getMostReviewedGames = (limit) => {
        return this.get(`game/most-reviewed/${limit}`)
    }
}

export const SteamService = new steamService();