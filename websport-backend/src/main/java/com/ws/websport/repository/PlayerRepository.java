package com.ws.websport.repository;

import com.ws.websport.model.Player;
import com.ws.websport.model.exceptions.PlayerNotFoundException;

public interface PlayerRepository {

    void addPlayerBaseInfo(String uri, Player player) throws PlayerNotFoundException;

    void addPlayerQuotes(String uri, Player player);
}
