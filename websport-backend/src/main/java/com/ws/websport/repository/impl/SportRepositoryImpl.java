package com.ws.websport.repository.impl;

import com.ws.websport.assets.JenaAssets;
import com.ws.websport.model.Sport;
import com.ws.websport.model.dto.SportInfoDTO;
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
                "     OPTIONAL { dbr:" + sportURI + " dbo:sportGoverningBody ?federation . " +
                "?federation dbo:abbreviation ?abbreviation; dbo:abstract ?federationAbstract .} " +
                "FILTER (lang(?abstract) = \"en\" && lang(?label) = \"en\" && lang(?federationAbstract) = \"en\")" +
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
                "?player dbp:sport dbr:"+ sportURI +  " . " +
                "        ?player rdf:type dbo:Person . " +
                "        OPTIONAL { ?player dbp:name ?name. } " +
                "        OPTIONAL { ?player dbp:fullname ?fullName. } " +
                "        OPTIONAL { ?player dbo:height ?height. } " +
                "        OPTIONAL { ?player dbo:thumbnail ?thumbnail. } " +
                "        OPTIONAL { ?player dbo:abstract ?abstract. } " +
                "        OPTIONAL { ?player rdfs:comment ?comment. } " +
                "        OPTIONAL { ?player dbo:birthDate ?birthDate. } " +
                "        OPTIONAL { ?player dbp:birthPlace ?birthPlace. } " +
                "        FILTER (lang(?abstract) = \"en\" && lang(?comment) =\"en\") " +
                "} " +
                "union { " +
                "?player dbp:sports dbr:"+ sportURI + " . " +
                "        ?player rdf:type dbo:Person . " +
                "        OPTIONAL { ?player dbp:name ?name. } " +
                "        OPTIONAL { ?player dbp:fullname ?fullName. } " +
                "        OPTIONAL { ?player dbo:height ?height. } " +
                "        OPTIONAL { ?player dbo:thumbnail ?thumbnail. } " +
                "        OPTIONAL { ?player dbo:abstract ?abstract. } " +
                "        OPTIONAL { ?player rdfs:comment ?comment. } " +
                "        OPTIONAL { ?player dbo:birthDate ?birthDate. } " +
                "        OPTIONAL { ?player dbp:birthPlace ?birthPlace. } " +
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

    @Override
    public SportInfoDTO getSportHistory() {
        String queryHistoryOfSport = "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "select distinct * where { " +
                "    dbr:History_of_sport dbo:abstract ?historyAbstract . " +
                "    dbr:Sport dbo:abstract ?sportAbstract ; " +
                "    rdfs:comment ?sportComment . " +
                "    FILTER (lang(?historyAbstract) = \"en\" &&  lang(?sportAbstract) = \"en\" && lang(?sportComment) = \"en\")" +
                "}";

        Query query = QueryFactory.create(queryHistoryOfSport);
        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            if (resultSet.hasNext()) {
                QuerySolution qs = resultSet.nextSolution();

                SportInfoDTO dto = new SportInfoDTO();
                dto.setHistoryAbstract(qs.getLiteral("historyAbstract").getLexicalForm());
                dto.setSportAbstract(qs.getLiteral("sportAbstract").getLexicalForm());
                dto.setSportComment(qs.getLiteral("sportComment").getLexicalForm());
                return dto;
            }
        }
        return null;
    }
}
