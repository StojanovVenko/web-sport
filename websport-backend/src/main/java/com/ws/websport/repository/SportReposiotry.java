package com.ws.websport.repository;

import com.ws.websport.model.Sport;

import java.util.List;

public interface SportReposiotry {

    void addSportBaseInfo(String sportURI, Sport sport);

    void addSportPlayers(String sportURI, Sport sport);
}
