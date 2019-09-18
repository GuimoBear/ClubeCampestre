package br.com.clubecampestre.domain.valueobjects;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;

public enum AssociateTypeEnum {
    SPONSOR("SPONSOR"),
    DEPENDENT("DEPENDENT");

    private final String value;

    private AssociateTypeEnum(final String value) {
        this.value = value;
    }

    @JsonValue
    final String value() {
        return this.value;
    }
}
