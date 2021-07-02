package com.ws.websport.repository.impl;

import com.ws.websport.model.Sport;
import com.ws.websport.repository.SportReposiotry;
import org.springframework.stereotype.Repository;

@Repository
public class SportRepositoryImpl implements SportReposiotry {


    @Override
    public void addSportBaseInfo(String sportURI, Sport sport) {

    }

    @Override
    public void addSportPlayers(String sportURI, Sport sport) {
        String queryPlayersOfSport = "prefix dbp: <http://dbpedia.org/property/> " +
                "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT distinct * where { { " +
                " ?user dbp:sport <" + sportURI + "> " +
                "        ?user rdf:type dbo:Person . " +
                "} " +
                "union { " +
                " ?user dbp:sports " + sportURI + " . " +
                "        ?user rdf:type dbo:Person . " +
                "} } ";

    }
}
