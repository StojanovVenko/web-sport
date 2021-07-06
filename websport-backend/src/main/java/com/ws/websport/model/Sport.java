package com.ws.websport.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

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

    Set<Player> players = new TreeSet<Player>();
}
