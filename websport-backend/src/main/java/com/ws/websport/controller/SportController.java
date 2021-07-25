package com.ws.websport.controller;

import com.ws.websport.model.Sport;
import com.ws.websport.model.dto.SportInfoDTO;
import com.ws.websport.service.SportService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/sports")
@CrossOrigin(origins = "http://localhost:3000")
public class SportController {

    private final SportService sportService;

    public SportController(SportService sportService) {
        this.sportService = sportService;
    }

    @GetMapping("/search")
    public Sport getSportInfo(@RequestParam("sport") String sportURI) {
        return this.sportService.getSportInfo(sportURI);
    }

    @GetMapping("/history")
    public SportInfoDTO getSportHistory() {
        return this.sportService.getSportHistory();
    }
}
