package com.ws.websport.repository.impl;

import com.ws.websport.assets.JenaAssets;
import com.ws.websport.model.Sport;
import com.ws.websport.repository.SportReposiotry;
import com.ws.websport.utils.Utils;
import org.apache.jena.query.*;
import org.springframework.stereotype.Repository;


@Repository
public class SportRepositoryImpl implements SportReposiotry {


    @Override
    public void addSportBaseInfo(String sportURI, Sport sport) {
        String querySportBaseInfo = "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT * where { " +
                "     OPTIONAL { dbr:" + sportURI + " rdfs:label ?label. } " +
                "     OPTIONAL { dbr:" + sportURI + " dbo:abstract ?abstract. } " +
                "     OPTIONAL { dbr:" + sportURI + " dbo:comment ?comment. } " +
                "     OPTIONAL { dbr:" + sportURI + " dbo:thumbnail ?thumbnail . } " +
                "     OPTIONAL { dbr:" + sportURI + " dbo:sportGoverningBody ?federation . } " +
                "FILTER (lang(?abstract) = \"en\" && lang(?label) = \"en\") " +
                "}";

        Query query = QueryFactory.create(querySportBaseInfo);

        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            if (resultSet.hasNext()) {
                Utils.addSportBaseInfo(sport, resultSet.nextSolution());
            }
        }
    }



    @Override
    public void addSportPlayers(String sportURI, Sport sport) {
        String queryPlayersOfSport = "prefix dbp: <http://dbpedia.org/property/> " +
                "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
                "SELECT distinct * where { { " +
                "?user dbp:sport dbr:"+ sportURI +  " . " +
                "        ?user rdf:type dbo:Person . " +
                "        OPTIONAL { ?user dbp:name ?name. } " +
                "        OPTIONAL { ?user dbp:fullname ?fullName. } " +
                "        OPTIONAL { ?user dbo:height ?height. } " +
                "        OPTIONAL { ?user dbo:thumbnail ?thumbnail. } " +
                "        OPTIONAL { ?user dbo:abstract ?abstract. } " +
                "        OPTIONAL { ?user rdfs:comment ?comment. } " +
                "        OPTIONAL { ?user dbo:birthDate ?birthDate. } " +
                "        OPTIONAL { ?user dbp:birthPlace ?birthPlace. } " +
                "        FILTER (lang(?abstract) = \"en\" && lang(?comment) =\"en\") " +
                "} " +
                "union { " +
                "?user dbp:sports dbr:"+ sportURI + " . " +
                "        ?user rdf:type dbo:Person . " +
                "        OPTIONAL { ?user dbp:name ?name. } " +
                "        OPTIONAL { ?user dbp:fullname ?fullName. } " +
                "        OPTIONAL { ?user dbo:height ?height. } " +
                "        OPTIONAL { ?user dbo:thumbnail ?thumbnail. } " +
                "        OPTIONAL { ?user dbo:abstract ?abstract. } " +
                "        OPTIONAL { ?user rdfs:comment ?comment. } " +
                "        OPTIONAL { ?user dbo:birthDate ?birthDate. } " +
                "        OPTIONAL { ?user dbp:birthPlace ?birthPlace. } " +
                "        FILTER (lang(?abstract) = \"en\" && lang(?comment) =\"en\") " +
                "} }";

        Query query = QueryFactory.create(queryPlayersOfSport);
        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            if (resultSet.hasNext()) {
                Utils.addSportPlayers(sport, resultSet);
            }
        }

    }
}
