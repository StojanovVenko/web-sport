package com.ws.websport.controller;

import com.ws.websport.model.Team;
import com.ws.websport.service.TeamService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/teams")
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/search")
    public Team getTeamInfo(@RequestParam("team") String searchTeam) {
        return this.teamService.getTeamInfo(searchTeam);
    }

}
