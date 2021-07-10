package com.ws.websport.service.impl;

import com.ws.websport.model.Player;
import com.ws.websport.model.exceptions.PlayerNotFoundException;
import com.ws.websport.repository.AssetsRepository;
import com.ws.websport.repository.PlayerRepository;
import com.ws.websport.service.PlayerService;
import org.springframework.stereotype.Service;

@Service
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;
    private final AssetsRepository assetsRepository;

    public PlayerServiceImpl(PlayerRepository playerRepository, AssetsRepository assetsRepository) {
        this.playerRepository = playerRepository;
        this.assetsRepository = assetsRepository;
    }

    @Override
    public Player getPlayerInfo(String name) throws PlayerNotFoundException {
        String uri = this.assetsRepository.createEntityIdentifier(name);

        Player player = new Player();
        this.playerRepository.addPlayerBaseInfo(uri, player);
        this.playerRepository.addPlayerQuotes(uri, player);
        this.playerRepository.addPlayerTeams(uri, player);
        return player;
    }
}
