package com.ws.websport.model;

import com.ws.websport.model.dto.PlayerTeamDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Player implements Comparable<Player> {
    String name;
    String fullName;
    Double height;
    String thumbnail;
    // abstract
    String description;

    // ne e vklucheno u query @param comment
    String comment;
    Date birthDate;
    String birthPlace;
    Date deathDate;
    String deathPlace;

    List<String> playerQuotes = new ArrayList<>();
    List<PlayerTeamDTO> teams = new ArrayList<>();

    @Override
    public int compareTo(Player o) {
        if(this.thumbnail != null ) {
            return -1;
        }
        if(this.fullName != null && o.fullName != null) {
            return this.fullName.compareTo(o.fullName);
        }
        if(this.name != null && o.name != null) {
            return this.name.compareTo(o.name);
        }
        if(this.description != null && o.description != null) {
            return this.description.compareTo(o.description);
        }
        return 1;
    }
}
