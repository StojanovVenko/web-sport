package com.ws.websport.repository;

import com.ws.websport.model.Sport;
import com.ws.websport.model.dto.SportInfoDTO;

public interface SportReposiotry {

    void addSportBaseInfo(String sportURI, Sport sport);

    void addSportPlayers(String sportURI, Sport sport);

    SportInfoDTO getSportHistory();
}
