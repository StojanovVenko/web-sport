package com.ws.websport.service.impl;

import com.ws.websport.model.Team;
import com.ws.websport.repository.TeamRepository;
import com.ws.websport.service.TeamService;
import org.springframework.stereotype.Service;
import com.ws.websport.repository.AssetsRepository;

@Service
public class TeamServiceImpl implements TeamService {
    private final TeamRepository teamRepository;
    private final AssetsRepository assetsRepository;

    public TeamServiceImpl(TeamRepository teamRepository, AssetsRepository assetsRepository) {
        this.teamRepository = teamRepository;
        this.assetsRepository = assetsRepository;
    }

    @Override
    public Team getTeamInfo(String searchTeam) {
        String teamURI = this.assetsRepository.createEntityIdentifier(searchTeam);

        Team team = new Team();
        this.teamRepository.addTeamBaseInfo(teamURI, team);
        this.teamRepository.addTeamStaffMembers(teamURI, team);
        this.teamRepository.addTeamNicknames(teamURI, team);
        return team;
    }
}
