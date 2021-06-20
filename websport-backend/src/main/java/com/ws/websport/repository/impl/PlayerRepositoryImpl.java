package com.ws.websport.repository.impl;

import com.ws.websport.assets.JenaAssets;
import com.ws.websport.model.Player;
import com.ws.websport.model.exceptions.PlayerNotFoundException;
import com.ws.websport.repository.PlayerRepository;
import org.apache.jena.query.*;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;

@Repository
public class PlayerRepositoryImpl implements PlayerRepository {

    @Override
    public void addPlayerBaseInfo(String uri, Player player) throws PlayerNotFoundException {
        String queryPlayerBaseInfo = "prefix dbp: <http://dbpedia.org/property/> " +
                "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT * WHERE { " +
                "OPTIONAL { <" + uri + "> dbp:name ?name. } " +
                "OPTIONAL { <" + uri + "> dbp:fullname ?fullName. } " +
                "OPTIONAL { <" + uri + "> dbo:height ?height. } " +
                "OPTIONAL { <" + uri + "> dbo:thumbnail ?thumbnail. } " +
                "OPTIONAL { <" + uri + "> dbo:abstract ?abstract. } " +
                "OPTIONAL { <" + uri + "> rdfs:comment ?comment. } " +
                "OPTIONAL { <" + uri + "> dbo:birthDate ?birthDate. } " +
                "OPTIONAL { <" + uri + "> dbp:birthPlace ?birthPlace. } " +
                "FILTER (lang(?abstract) = \"en\" && lang(?comment) = \"en\") " +
                "}";

        Query query = QueryFactory.create(queryPlayerBaseInfo);

        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            if(resultSet.hasNext()) {
                addPlayerBaseInfo(player, resultSet.nextSolution());
            } else throw new PlayerNotFoundException(uri.split("/")[uri.split("/").length-1]);
        }
    }

    @Override
    public void addPlayerQuotes(String uri, Player player) {
        String queryPlayerQuotes = "prefix dbp: <http://dbpedia.org/property/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "SELECT * where { " +
                "<" + uri + "> dbp:quote ?quote." +
                "FILTER (lang(?quote) = \"en\") " +
                "}";

        Query queryQuotes = QueryFactory.create(queryPlayerQuotes);

        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, queryQuotes)) {
            ResultSet resultSet = queryExecution.execSelect();
            if(resultSet.hasNext()) {
                addPlayerQuotes(player, resultSet);
            }
        }
    }

    private void addPlayerBaseInfo(Player player, QuerySolution qs) {
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

    private void addPlayerQuotes(Player player, ResultSet resultSet) {
        while(resultSet.hasNext()) {
            QuerySolution qs = resultSet.nextSolution();
            player.getPlayerQuotes().add(qs.get("quote").asLiteral().getLexicalForm());
        }
    }

}

