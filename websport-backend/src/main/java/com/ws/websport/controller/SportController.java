package com.ws.websport.controller;

import com.ws.websport.model.Sport;
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
    public Sport getSportInfo(@RequestParam("sport") String sportName) {
        return this.sportService.getSportInfo(sportName);
    }
}
