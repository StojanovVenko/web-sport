export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';
// export const AUTHORIZATION_HEADER = 'Authorization';
export const categories = {players: "Players", teams:  "Teams", sports: "Sports"};

export const sports = [
    [{sport: "Soccer", URI: "http://dbpedia.org/resource/Association_football", imagePath: "soccer.png"},
    {sport: "Basketball", URI: "http://dbpedia.org/resource/Basketball", imagePath: "basketball.png"},
    {sport: "Tennis", URI: "http://dbpedia.org/resource/Tennis", imagePath: "tennis.png"},
    {sport: "Baseball", URI: "http://dbpedia.org/resource/Baseball", imagePath: "baseball.png"},
    {sport: "Golf", URI: "http://dbpedia.org/resource/Golf", imagePath: "golf.png"},
    {sport: "Running", URI: "http://dbpedia.org/resource/Running", imagePath: "running.png"}],
    [{sport: "Volleyball", URI: "http://dbpedia.org/resource/Volleyball", imagePath: "volleyball.png"},
    {sport: "Badminton", URI: "http://dbpedia.org/resource/Badminton", imagePath: "badminton.png"},
    {sport: "Swimming", URI: "http://dbpedia.org/resource/Swimming", imagePath: "swimming.png"},
    {sport: "Boxing", URI: "http://dbpedia.org/resource/Boxing", imagePath: "boxing.png"},
    {sport: "Table Tennis", URI: "http://dbpedia.org/resource/Table_tennis", imagePath: "table_tennis.png"},
    {sport: "Skiing", URI: "http://dbpedia.org/resource/Skiing", imagePath: "skiing.png"}],
    [{sport: "Ice Skating", URI: "http://dbpedia.org/resource/Ice_skating", imagePath: "ice_skating.png"},
    {sport: "Rugby", URI: "http://dbpedia.org/resource/Rugby_football", imagePath: "rugby.png"},
    {sport: "Pool", URI: "http://dbpedia.org/resource/Pool_(cue_sports)", imagePath: "pool.png"},
    {sport: "Darts", URI: "http://dbpedia.org/resource/Darts", imagePath: "darts.png"},
    {sport: "Bowling", URI: "http://dbpedia.org/resource/Bowling", imagePath: "bowling.png"},
    {sport: "Ice Hockey", URI: "http://dbpedia.org/resource/Ice_hockey", imagePath: "ice_hockey.png"}],
    [{sport: "Surfing", URI: "http://dbpedia.org/resource/Surfing", imagePath: "surfing.png"},
    {sport: "Karate", URI: "http://dbpedia.org/resource/Karate", imagePath: "karate.png"},
    {sport: "Horse Racing", URI: "http://dbpedia.org/resource/Horse_racing", imagePath: "horse_racing.png"},
    {sport: "Snowboarding", URI: "http://dbpedia.org/resource/Snowboarding", imagePath: "snowboarding.png"},
    {sport: "Cycling", URI: "http://dbpedia.org/resource/Cycling", imagePath: "cycling.png"},
    {sport: "Gymnastics", URI: "http://dbpedia.org/resource/Gymnastics", imagePath: "gymnastics.png"}],
    [{sport: "Judo", URI: "http://dbpedia.org/resource/Judo", imagePath: "judo.png"},
    {sport: "Kickboxing", URI: "http://dbpedia.org/resource/Kickboxing", imagePath: "kickboxing.png"}]
];