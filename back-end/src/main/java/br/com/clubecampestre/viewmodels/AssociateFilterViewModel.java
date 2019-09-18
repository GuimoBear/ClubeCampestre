package br.com.clubecampestre.viewmodels;

import br.com.clubecampestre.domain.valueobjects.AssociateFilter;
import br.com.clubecampestre.domain.valueobjects.AssociateTypeEnum;

public class AssociateFilterViewModel {

    private String name;
    private String RG;
    private String CPF;
    private AssociateTypeEnum associateType;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRG() {
        return RG;
    }

    public void setRG(String RG) {
        this.RG = RG;
    }

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public AssociateTypeEnum getAssociateType() {
        return associateType;
    }

    public void setAssociateType(AssociateTypeEnum associateType) {
        this.associateType = associateType;
    }

    public AssociateFilter toDomainFilter() {
        return new AssociateFilter(getName(), getRG(), getCPF(), getAssociateType());
    }
}
