import apiUtils from "../utils/apiUtils";

const PlayersService = {

    getPlayer: (name) => {
        return apiUtils.get(`/api/players/search?player=${name}`);
    }

};

export default PlayersService;