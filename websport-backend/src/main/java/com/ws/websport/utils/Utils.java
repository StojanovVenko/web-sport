package com.ws.websport.utils;

import com.ws.websport.model.Player;
import com.ws.websport.model.Sport;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Utils {

    public static void addPlayerBaseInfo(Player player, QuerySolution qs) {
        player.setName(qs.get("name") != null ? qs.get("name").asLiteral().getLexicalForm() : null);
        player.setFullName(qs.get("fullName") != null ? qs.get("fullName").asLiteral().getLexicalForm() : null);
        player.setHeight(qs.get("height") != null ? qs.get("height").asLiteral().getDouble() : null);
        player.setThumbnail(qs.get("thumbnail") != null ? qs.get("thumbnail").toString() : null);
        player.setDescription(qs.get("abstract") != null ? qs.get("abstract").asLiteral().getLexicalForm() : null);
        player.setComment(qs.get("comment") != null ? qs.get("comment").asLiteral().getLexicalForm() : null);
        player.setBirthPlace(qs.get("birthPlace") != null ? qs.get("birthPlace").toString() : null);
        try {
            player.setBirthDate(qs.get("birthDate") != null ? new SimpleDateFormat("yyyy-MM-dd").parse(
                    qs.get("birthDate").asLiteral().getLexicalForm()) : null);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public static void addPlayerQuotes(Player player, ResultSet resultSet) {
        while(resultSet.hasNext()) {
            QuerySolution qs = resultSet.nextSolution();
            player.getPlayerQuotes().add(qs.get("quote").asLiteral().getLexicalForm());
        }
    }

    public static void addSportBaseInfo(Sport sport, QuerySolution qs) {
        sport.setLabel(qs.get("label") != null ? qs.get("label").asLiteral().getLexicalForm() : null);
        sport.setComment(qs.get("comment") != null ? qs.get("comment").asLiteral().getLexicalForm() : null);
        sport.setDescription(qs.get("abstract") != null ? qs.get("abstract").asLiteral().getLexicalForm() : null);
        sport.setThumbnail(qs.get("thumbnail") != null ? qs.get("thumbnail").toString() : null);
        sport.setSportGoverningBody(qs.get("federation") != null ? qs.get("federation").toString() : null);
    }

    public static void addSportPlayers(Sport sport, ResultSet resultSet) {
        while(resultSet.hasNext()) {
            QuerySolution qs = resultSet.nextSolution();
            Player player = new Player();
            addPlayerBaseInfo(player, qs);
            sport.getPlayers().add(player);
        }
    }
}
