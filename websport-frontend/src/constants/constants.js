export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';
// export const AUTHORIZATION_HEADER = 'Authorization';
export const categories = {players: "Players", teams:  "Teams", sports: "Sports"};

export const sports = [
    {sport: "Soccer", URI: "Association_football", imageName: "soccer.png"},
    {sport: "Basketball", URI: "Basketball", imageName: "basketball.png"},
    {sport: "Tennis", URI: "Tennis", imageName: "tennis.png"},
    {sport: "Baseball", URI: "Baseball", imageName: "baseball.png"},
    {sport: "Golf", URI: "Golf", imageName: "golf.png"},
    {sport: "Running", URI: "Running", imageName: "running.png"},
    {sport: "Volleyball", URI: "Volleyball", imageName: "volleyball.png"},
    {sport: "Badminton", URI: "Badminton", imageName: "badminton.png"},
    {sport: "Swimming", URI: "Swimming", imageName: "swimming.png"},
    {sport: "Boxing", URI: "Boxing", imageName: "boxing.png"},
    {sport: "Table Tennis", URI: "Table_tennis", imageName: "table_tennis.png"},
    {sport: "Skiing", URI: "Skiing", imageName: "skiing.png"},
    {sport: "Ice Skating", URI: "Ice_skating", imageName: "ice_skating.png"},
    {sport: "Rugby", URI: "Rugby_football", imageName: "rugby.png"},
    {sport: "Pool", URI: "Pool_(cue_sports)", imageName: "pool.png"},
    {sport: "Darts", URI: "Darts", imageName: "darts.png"},
    {sport: "Bowling", URI: "Bowling", imageName: "bowling.png"},
    {sport: "Ice Hockey", URI: "Ice_hockey", imageName: "ice_hockey.png"},
    {sport: "Surfing", URI: "Surfing", imageName: "surfing.png"},
    {sport: "Karate", URI: "Karate", imageName: "karate.png"},
    {sport: "Horse Racing", URI: "Horse_racing", imageName: "horse_racing.png"},
    {sport: "Snowboarding", URI: "Snowboarding", imageName: "snowboarding.png"},
    {sport: "Cycling", URI: "Cycling", imageName: "cycling.png"},
    {sport: "Gymnastics", URI: "Gymnastics", imageName: "gymnastics.png"},
    {sport: "Judo", URI: "Judo", imageName: "judo.png"},
    {sport: "Kickboxing", URI: "Kickboxing", imageName: "kickboxing.png"}
];