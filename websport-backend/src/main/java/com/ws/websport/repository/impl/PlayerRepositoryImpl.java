package com.ws.websport.repository.impl;

import com.ws.websport.assets.JenaAssets;
import com.ws.websport.model.Player;
import com.ws.websport.model.exceptions.PlayerNotFoundException;
import com.ws.websport.repository.PlayerRepository;
import com.ws.websport.utils.Utils;
import org.apache.jena.query.*;
import org.springframework.stereotype.Repository;

import java.awt.desktop.QuitResponse;
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
                Utils.addPlayerBaseInfo(player, resultSet.nextSolution());
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
                Utils.addPlayerQuotes(player, resultSet);
            }
        }
    }

    @Override
    public void addPlayerTeams(String uri, Player player) {
        String queryPlayerTeam = "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT ?team ?label ?abstract " +
                "WHERE { " +
                "    <" + uri + "> dbo:team ?team . " +
                "    ?team rdfs:label ?label; " +
                "        dbo:abstract ?abstract . " +
                "    FILTER ( " +
                "        lang(?abstract) = \"en\" && " +
                "        lang(?label) = \"en\" " +
                "    ) " +
                "}";

        Query query = QueryFactory.create(queryPlayerTeam);

        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
                Utils.addPlayerTeams(player, resultSet);
        }

    }

}

