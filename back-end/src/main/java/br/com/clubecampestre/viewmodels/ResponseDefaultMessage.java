package br.com.clubecampestre.viewmodels;

import br.com.clubecampestre.domain.valueobjects.EntityNotValidException;

public class ResponseDefaultMessage {
    public enum ActionStatus {
        SUCCESS("SUCCESS"), ERROR("ERROR"), INVALID("INVALID");

        private final String value;

        ActionStatus(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }
    }

    private ActionStatus status;
    private String message;
    private Object content;

    private ResponseDefaultMessage(ActionStatus status, String mesage, Object content) {
        this.status = status;
        this.message = mesage;
        this.content = content;
    }

    public ActionStatus getStatus() {
        return status;
    }

    public void setStatus(ActionStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getContent() {
        return content;
    }

    public void setContent(Object content) {
        this.content = content;
    }

    public static ResponseDefaultMessage Success() {
        return new ResponseDefaultMessage(ActionStatus.SUCCESS, null, null);
    }

    public static ResponseDefaultMessage Success(String message) {
        return new ResponseDefaultMessage(ActionStatus.SUCCESS, message, null);
    }

    public static ResponseDefaultMessage Error(String message) {
        return new ResponseDefaultMessage(ActionStatus.ERROR, message, null);
    }

    public static ResponseDefaultMessage Invalid(EntityNotValidException ex) {
        return new ResponseDefaultMessage(ActionStatus.ERROR, ex.toString(), ex.getErrors());
    }
}
