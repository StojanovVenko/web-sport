package com.ws.websport.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Sport {
    String label;
    String comment;
    String description;
    String thumbnail;
    String sportGoverningBody;

    List<Player> players = new ArrayList<>();
}
