import apiUtils from "../utils/apiUtils";

const sportsService = {

    getSport: (sportURI) => {
        return apiUtils.get(`/api/sports/search?sport=${sportURI}`);
    }

};

export default sportsService;