package com.ws.websport.service;

import com.ws.websport.model.Sport;
import com.ws.websport.model.dto.SportInfoDTO;

public interface SportService {

    Sport getSportInfo(String sportURI);

    SportInfoDTO getSportHistory();

}
