export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';
// export const AUTHORIZATION_HEADER = 'Authorization';
export const categories = {players: "Players", teams:  "Teams", sports: "Sports"};

export const sports = [
    {sport: "Soccer", URI: "", imagePath: "soccer.png"},
        {sport: "Basketball", URI: "", imagePath: "basketball.png"},
        {sport: "Tennis", URI: "", imagePath: "tennis.png"},
        {sport: "Baseball", URI: "", imagePath: "baseball.png"},
        {sport: "Golf", URI: "", imagePath: "golf.png"},
        {sport: "Running", URI: "", imagePath: "running.png"},
    {sport: "Volleyball", URI: "", imagePath: "volleyball.png"},
        {sport: "Badminton", URI: "", imagePath: "badminton.png"},
        {sport: "Swimming", URI: "", imagePath: "swimming.png"},
        {sport: "Boxing", URI: "", imagePath: "boxing.png"},
        {sport: "Table Tennis", URI: "", imagePath: "table_tennis.png"},
        {sport: "Skiing", URI: "", imagePath: "skiing.png"},
    {sport: "Ice Skating", URI: "", imagePath: "ice_skating.png"},
        {sport: "Rugby", URI: "", imagePath: "rugby.png"},
        {sport: "Pool", URI: "", imagePath: "pool.png"},
        {sport: "Darts", URI: "", imagePath: "darts.png"},
        {sport: "Bowling", URI: "", imagePath: "bowling.png"},
        {sport: "Ice Hockey", URI: "", imagePath: "ice_hockey.png"},
    {sport: "Surfing", URI: "", imagePath: "surfing.png"},
        {sport: "Karate", URI: "", imagePath: "karate.png"},
        {sport: "Horse Racing", URI: "", imagePath: "horse_racing.png"},
        {sport: "Snowboarding", URI: "", imagePath: "snowboarding.png"},
        {sport: "Cycling", URI: "", imagePath: "cycling.png"},
        {sport: "Gymnastics", URI: "", imagePath: "gymnastics.png"},
    {sport: "Judo", URI: "", imagePath: "judo.png"},
        {sport: "Kickboxing", URI: "", imagePath: "kickboxing.png"}
];