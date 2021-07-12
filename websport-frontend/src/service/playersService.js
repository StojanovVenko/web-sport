import apiUtils from "../utils/apiUtils";

const PlayersService = {

    getPlayer: (name) => {
        return apiUtils.get(`/api/players/search?player=${name}`);
    },

    getPlayerByURI: (uri) => {
        return apiUtils.get(`/api/players/search?uri=${uri}`);
    }
};

export default PlayersService;