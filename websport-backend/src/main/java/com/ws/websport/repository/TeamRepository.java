package com.ws.websport.repository;

import com.ws.websport.model.Team;

public interface TeamRepository {

    void addTeamBaseInfo(String teamURI, Team team);

    void addTeamStaffMembers(String teamURI, Team team);

    void addTeamNicknames(String teamURI, Team team);

}
