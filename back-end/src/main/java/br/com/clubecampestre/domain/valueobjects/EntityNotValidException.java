package br.com.clubecampestre.domain.valueobjects;

import java.util.ArrayList;

public class EntityNotValidException extends Exception {

    private final ArrayList<String> errors;
    public EntityNotValidException(ArrayList<String> errors) {
        super();
        this.errors = errors;
    }

    public ArrayList<String> getErrors() {
        return errors;
    }

    @Override
    public String toString() {
        String str = "";
        for(String message: errors) {
            str += message + ", ";
        }
        if(str.length() > 2) {
            str = str.substring(0, str.length() - 2);
        }
        return str;
    }
}
