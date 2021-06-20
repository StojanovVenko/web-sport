package com.ws.websport.model;

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
public class Player {
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
}
