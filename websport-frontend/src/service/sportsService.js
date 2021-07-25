import apiUtils from "../utils/apiUtils";

const sportsService = {

    getSport: (sportURI) => {
        return apiUtils.get(`/api/sports/search?sport=${sportURI}`);
    },

    getSportInfo: () => {
        return apiUtils.get(`/api/sports/history`);
    }

};

export default sportsService;