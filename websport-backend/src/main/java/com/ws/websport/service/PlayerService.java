package com.ws.websport.service;

import com.ws.websport.model.Player;
import com.ws.websport.model.exceptions.PlayerNotFoundException;

public interface PlayerService {
    Player getPlayerInfo(String name) throws PlayerNotFoundException;
}
