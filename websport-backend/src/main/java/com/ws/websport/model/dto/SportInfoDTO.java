package com.ws.websport.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SportInfoDTO {
    String historyAbstract;
    String sportAbstract;
    String sportComment;
}
