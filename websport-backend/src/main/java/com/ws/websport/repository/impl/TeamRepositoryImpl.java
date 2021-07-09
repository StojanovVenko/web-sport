package com.ws.websport.repository.impl;

import com.ws.websport.model.Team;
import com.ws.websport.repository.TeamRepository;
import com.ws.websport.utils.Utils;
import org.apache.jena.query.*;
import org.springframework.stereotype.Repository;
import com.ws.websport.assets.JenaAssets;

@Repository
public class TeamRepositoryImpl implements TeamRepository {

    @Override
    public void addTeamBaseInfo(String teamURI, Team team) {
        String queryTeamBaseInfo = "prefix dbp: <http://dbpedia.org/property/> " +
                "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT DISTINCT " +
                "    ?label ?abstract ?formationDate ?fullName ?clubName " +
                " WHERE { " +
                "     OPTIONAL { <" + teamURI + "> rdfs:label ?label . } " +
                "     OPTIONAL { <" + teamURI + "> dbo:abstract ?abstract . } " +
                "     OPTIONAL { <" + teamURI + "> dbo:formationDate ?formationDate . } " +
                "     OPTIONAL { <" + teamURI + "> dbp:fullname ?fullName . } " +
                "     OPTIONAL { <" + teamURI + "> dbp:clubname ?clubName . } " +
                "    FILTER( " +
                "        lang(?label) = \"en\" && " +
                "        lang(?abstract) = \"en\" && " +
                "        lang(?fullName) = \"en\" && " +
                "        lang(?clubName) = \"en\" " +
                "    ) " +
                "}";

        Query query = QueryFactory.create(queryTeamBaseInfo);

        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            if (resultSet.hasNext()) {
                Utils.addTeamBaseInfo(team, resultSet.nextSolution());
            }
        }
    }

    @Override
    public void addTeamStaffMembers(String teamURI, Team team) {
        String queryStaffMembers = "prefix dbp: <http://dbpedia.org/property/> " +
                "prefix dbo: <http://dbpedia.org/ontology/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> " +
                "SELECT DISTINCT " +
                "    ?managerTitle ?managerFullName ?managerAbstract " +
                "    ?groundFullName ?groundAbstract " +
                "    ?chairmanTitle ?chairmanFullName ?chairmanAbstract " +
                " WHERE { " +
                "     OPTIONAL { <" + teamURI + "> dbo:managerTitle ?managerTitle . } " +
                "     OPTIONAL { " +
                "        <" + teamURI + "> dbo:manager ?manager . " +
                "            ?manager dbo:abstract ?managerAbstract ; " +
                "                dbp:name ?managerFullName . " +
                "    } " +
                "     OPTIONAL { " +
                "        <" + teamURI + "> dbo:ground ?ground . " +
                "            ?ground dbp:fullname ?groundFullName; " +
                "                dbo:abstract ?groundAbstract . " +
                "        filter(lang(?groundAbstract) = \"en\") " +
                "    } " +
                "     OPTIONAL { <" + teamURI + "> dbo:chairmanTitle  ?chairmanTitle . } " +
                "     OPTIONAL { " +
                "        <" + teamURI + "> dbo:chairman ?chairman . " +
                "        ?chairman dbo:abstract ?chairmanAbstract; " +
                "            dbp:name ?chairmanFullName . " +
                "    } " +
                "    FILTER( " +
                "        lang(?managerFullName) = \"en\" && " +
                "        lang(?managerAbstract) = \"en\" && " +
                "        lang(?chairmanAbstract) = \"en\" " +
                "       ) " +
                "} ";

        Query query = QueryFactory.create(queryStaffMembers);

        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            if (resultSet.hasNext()) {
                Utils.addTeamStaffMembers(team, resultSet.nextSolution());
            }
        }
    }

    @Override
    public void addTeamNicknames(String teamURI, Team team) {
        String queryTeamNicknames = "prefix dbp: <http://dbpedia.org/property/> " +
                "prefix dbr: <http://dbpedia.org/resource/> " +
                "SELECT DISTINCT " +
                "    ?nickname " +
                "WHERE { " +
                "    <" + teamURI + "> dbp:nickname ?nickname . " +
                "    FILTER(lang(?nickname) = \"en\") " +
                "}";

        Query query = QueryFactory.create(queryTeamNicknames);

        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            while (resultSet.hasNext()) {
                QuerySolution sln = resultSet.nextSolution();
                if(sln.contains("nickname") &&
                        sln.get("nickname") != null &&
                        sln.get("nickname").isLiteral() &&
                        sln.getLiteral("nickname").getLexicalForm().trim().length() > 0
                ) {
                    team.getNicknames().add(sln.getLiteral("nickname").getLexicalForm());
                }
            }
        }
    }
}
