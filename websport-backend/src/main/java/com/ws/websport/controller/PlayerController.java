package com.ws.websport.controller;

import com.ws.websport.model.Player;
import com.ws.websport.model.exceptions.PlayerNotFoundException;
import com.ws.websport.service.PlayerService;
import org.apache.commons.lang3.text.WordUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/players")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    @GetMapping("/search")
    public Player getPlayerInfo(@RequestParam(name = "player") String player) throws PlayerNotFoundException {
        return playerService.getPlayerInfo(WordUtils.capitalizeFully(player));
    }

}
