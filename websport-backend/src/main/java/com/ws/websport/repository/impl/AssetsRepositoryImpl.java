package com.ws.websport.repository.impl;

import com.ws.websport.assets.JenaAssets;
import com.ws.websport.repository.AssetsRepository;
import org.apache.jena.query.*;
import org.springframework.stereotype.Repository;

@Repository
public class AssetsRepositoryImpl implements AssetsRepository {

    @Override
    public String createEntityIdentifier(String search) {
        search = search.replaceAll(" ", "_");

        String queryString = "prefix dbr: <http://dbpedia.org/resource/> " +
                "prefix dbo: <http://dbpedia.org/ontology/> " +
                "SELECT ?uri where { " +
                "dbr:" + search + " dbo:wikiPageRedirects ?uri . " +
                "}";

        Query query = QueryFactory.create(queryString);
        try (QueryExecution queryExecution = QueryExecutionFactory.sparqlService(JenaAssets.SPARQLEndpoint, query)) {
            ResultSet resultSet = queryExecution.execSelect();
            if(resultSet.hasNext()) {
                return resultSet.nextSolution().get("uri").toString();
            }
        } catch (Exception e) {
            System.out.println("============" + e.getLocalizedMessage() + "\n" + e.getCause() + "\n\n");
        }
        return "http://dbpedia.org/resource/" + search;
    }
}
