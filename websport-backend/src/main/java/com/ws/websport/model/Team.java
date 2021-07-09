package com.ws.websport.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Team {
    String label;
    String description;
    Date formationDate;
    String groundName;
    String groundDescription;

    // maybe this will be class
    String league;

    String chairmanName;
    String chairmanDescription;
    String chairmanTitle;

    String managerName;
    String managerTitle;
    String managerDescription;

    String clubName;
    String fullName;

    List<String> nicknames = new ArrayList<>();
    Set<Player> players = new TreeSet<>();

    // igracite koi se u ovaj tim (dbp:club, dbp:clubs i dbo:team)


}
