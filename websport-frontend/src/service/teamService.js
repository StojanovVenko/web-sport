import apiUtils from "../utils/apiUtils";

const teamService = {

    getTeam: (teamName) => {
        return apiUtils.get(`/api/teams/search?team=${teamName}`);
    }

};

export default teamService;