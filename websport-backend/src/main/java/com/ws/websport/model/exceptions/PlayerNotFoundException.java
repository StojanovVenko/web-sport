package com.ws.websport.model.exceptions;

public class PlayerNotFoundException extends Exception{

    public PlayerNotFoundException (String playerName) {
        super(playerName + " not found! Check what are you typing!!!");
    }
}
