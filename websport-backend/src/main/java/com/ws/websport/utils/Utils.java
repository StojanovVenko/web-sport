package com.ws.websport.utils;

import com.ws.websport.model.Player;
import com.ws.websport.model.Sport;
import com.ws.websport.model.Team;
import com.ws.websport.model.dto.PlayerTeamDTO;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils {

    public static void addPlayerBaseInfo(Player player, QuerySolution qs) {
        player.setURI(qs.contains("player") && qs.get("player").isResource() ?
                qs.getResource("player").toString().split("/")[qs.getResource("player").toString().split("/").length - 1]
                : null);
        player.setName(qs.get("name") != null && qs.get("name").isLiteral() ? qs.get("name").asLiteral().getLexicalForm() : null);
        player.setFullName(qs.get("fullName") != null && qs.get("fullName").isLiteral() ? qs.get("fullName").asLiteral().getLexicalForm() : null);
        player.setHeight(qs.get("height") != null ? qs.get("height").asLiteral().getDouble() : null);
        player.setThumbnail(qs.get("thumbnail") != null ? qs.get("thumbnail").toString() : null);
        player.setDescription(qs.get("abstract") != null && qs.get("abstract").isLiteral() ? qs.get("abstract").asLiteral().getLexicalForm() : null);
        player.setComment(qs.get("comment") != null && qs.get("comment").isLiteral() ? qs.get("comment").asLiteral().getLexicalForm() : null);
        player.setBirthPlace(qs.get("birthPlace") != null ? qs.get("birthPlace").toString() : null);
        player.setDeathPlace(qs.get("deathPlace") != null ? qs.get("deathPlace").toString() : null);
        try {
            player.setBirthDate((qs.get("birthDate") != null && qs.get("birthDate").isLiteral()) ?
                    new SimpleDateFormat("yyyy-MM-dd").parse(
                            qs.get("birthDate").asLiteral().toString()
                    ) : null);
            player.setDeathDate((qs.get("deathDate") != null && qs.get("deathDate").isLiteral()) ?
                    new SimpleDateFormat("yyyy-MM-dd").parse(
                            qs.get("deathDate").asLiteral().toString()
                    ) : null);
        } catch (ParseException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void addPlayerQuotes(Player player, ResultSet resultSet) {
        while (resultSet.hasNext()) {
            QuerySolution qs = resultSet.nextSolution();
            player.getPlayerQuotes().add(qs.get("quote").asLiteral().getLexicalForm());
        }
    }

    public static void addPlayerTeams(Player player, ResultSet resultSet) {
        while (resultSet.hasNext()) {
            QuerySolution qs = resultSet.nextSolution();
            String uri = null,
                    description = null,
                    label = null;

            if (qs.contains("team") && qs.get("team") != null)
                uri = qs.getResource("team").toString();
            if (qs.contains("label") && qs.get("label") != null && qs.get("label").isLiteral())
                label = qs.getLiteral("label").getLexicalForm();
            if (qs.contains("abstract") && qs.get("abstract") != null && qs.get("abstract").isLiteral())
                description = qs.getLiteral("abstract").getLexicalForm();

            player.getTeams().add(new PlayerTeamDTO(uri, label, description));
        }
    }

    public static void addSportBaseInfo(Sport sport, QuerySolution qs) {
        sport.setLabel(qs.get("label") != null ? qs.get("label").asLiteral().getLexicalForm() : null);
        sport.setComment(qs.get("comment") != null ? qs.get("comment").asLiteral().getLexicalForm() : null);
        sport.setDescription(qs.get("abstract") != null ? qs.get("abstract").asLiteral().getLexicalForm() : null);
        sport.setThumbnail(qs.get("thumbnail") != null ? qs.get("thumbnail").toString() : null);
        sport.setSportGoverningBody(qs.get("abbreviation") != null && qs.get("abbreviation").isLiteral()
                ? qs.getLiteral("abbreviation").getLexicalForm()
                : null);
        sport.setSportGoverningBodyDescription(qs.get("federationAbstract") != null ?
                qs.getLiteral("federationAbstract").getLexicalForm() : null);
    }

    public static void addSportPlayers(Sport sport, ResultSet resultSet) {
        while (resultSet.hasNext()) {
            QuerySolution qs = resultSet.nextSolution();
            Player player = new Player();
            addPlayerBaseInfo(player, qs);
            sport.getPlayers().add(player);
        }
    }

    public static void addTeamBaseInfo(Team team, QuerySolution qs) {
        if (qs.contains("label") && qs.get("label") != null && qs.get("label").isLiteral())
            team.setLabel(qs.get("label").asLiteral().getLexicalForm());
        if (qs.contains("abstract") && qs.get("abstract") != null && qs.get("abstract").isLiteral())
            team.setDescription(qs.get("abstract").asLiteral().getLexicalForm());
        if (qs.contains("fullName") && qs.get("fullName") != null && qs.get("fullName").isLiteral())
            team.setFullName(qs.get("fullName").asLiteral().getLexicalForm());
        if (qs.contains("clubName") && qs.get("clubName") != null && qs.get("clubName").isLiteral())
            team.setClubName(qs.get("clubName").asLiteral().getLexicalForm());
        try {
            if (qs.contains("formationDate") && qs.get("formationDate") != null && qs.get("formationDate").isLiteral())
                team.setFormationDate(new SimpleDateFormat("yyyy-MM-dd").parse(
                        qs.get("formationDate").asLiteral().toString()
                ));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void addTeamStaffMembers(Team team, QuerySolution qs) {
        if (qs.contains("managerTitle") && qs.get("managerTitle") != null && qs.get("managerTitle").isLiteral())
            team.setManagerTitle(qs.getLiteral("managerTitle").getLexicalForm());
        if (qs.contains("managerFullName") && qs.get("managerFullName") != null && qs.get("managerFullName").isLiteral())
            team.setManagerName(qs.getLiteral("managerFullName").getLexicalForm());
        if (qs.contains("managerAbstract") && qs.get("managerAbstract") != null && qs.get("managerAbstract").isLiteral())
            team.setManagerDescription(qs.getLiteral("managerAbstract").getLexicalForm());
        if (qs.contains("groundFullName") && qs.get("groundFullName") != null && qs.get("groundFullName").isLiteral())
            team.setGroundName(qs.getLiteral("groundFullName").getLexicalForm());
        if (qs.contains("groundAbstract") && qs.get("groundAbstract") != null && qs.get("groundAbstract").isLiteral())
            team.setGroundDescription(qs.getLiteral("groundAbstract").getLexicalForm());
        if (qs.contains("chairmanTitle") && qs.get("chairmanTitle") != null && qs.get("chairmanTitle").isLiteral())
            team.setChairmanTitle(qs.getLiteral("chairmanTitle").getLexicalForm());
        if (qs.contains("chairmanFullName") && qs.get("chairmanFullName") != null && qs.get("chairmanFullName").isLiteral())
            team.setChairmanName(qs.getLiteral("chairmanFullName").getLexicalForm());
        if (qs.contains("chairmanAbstract") && qs.get("chairmanAbstract") != null && qs.get("chairmanAbstract").isLiteral())
            team.setChairmanDescription(qs.getLiteral("chairmanAbstract").getLexicalForm());
    }
}
