package com.ws.websport.service.impl;

import com.ws.websport.model.Sport;
import com.ws.websport.repository.AssetsRepository;
import com.ws.websport.repository.SportReposiotry;
import com.ws.websport.service.SportService;
import org.springframework.stereotype.Service;

@Service
public class SportServiceImpl implements SportService {
    private final SportReposiotry sportReposiotry;
    private final AssetsRepository assetsRepository;

    public SportServiceImpl(SportReposiotry sportReposiotry, AssetsRepository assetsRepository) {
        this.sportReposiotry = sportReposiotry;
        this.assetsRepository = assetsRepository;
    }

    @Override
    public Sport getSportInfo(String sportName) {
        String sportURI = this.assetsRepository.createEntityIdentifier(sportName);

        Sport sport = new Sport();
        this.sportReposiotry.addSportBaseInfo(sportURI, sport);
        this.sportReposiotry.addSportPlayers(sportURI, sport);
        return sport;
    }
}
