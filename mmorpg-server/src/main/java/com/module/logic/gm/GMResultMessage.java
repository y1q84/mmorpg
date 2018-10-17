package com.module.logic.gm;

public class GMResultMessage {
    private final static int SUCESS=1;

    private final int FAIL=0;

    private int result;

    private String message;

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static GMResultMessage getSucessMessage(String message){
        GMResultMessage gmResultMessage=new GMResultMessage();
        gmResultMessage.setResult(SUCESS);
        gmResultMessage.setMessage(message);

        return gmResultMessage;
    }

}
