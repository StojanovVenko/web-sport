package com.ws.websport.controller;

import com.ws.websport.model.Sport;
import com.ws.websport.service.SportService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sports")
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
