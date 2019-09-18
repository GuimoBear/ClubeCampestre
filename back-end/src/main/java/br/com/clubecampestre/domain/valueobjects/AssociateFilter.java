package br.com.clubecampestre.domain.valueobjects;

public class AssociateFilter {

    private String name;
    private String RG;
    private String CPF;
    private AssociateTypeEnum associateType;

    public AssociateFilter(String name, String RG, String CPF, AssociateTypeEnum associateType) {
        setName(name);
        setRG(RG);
        setCPF(CPF);
        setAssociateType(associateType);
    }

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

    public boolean hasNameFilter() {
        String name = getName();
        return name != null && name.trim().length() > 0;
    }

    public boolean hasCPFFilter() {
        String cpf = getCPF();
        return cpf != null && cpf.trim().length() == 11;
    }

    public boolean hasRGFilter() {
        String rg = getRG();
        return rg != null && rg.trim().length() > 0;
    }

    public boolean hasAssociatedTypeFilter() {
        return getAssociateType() != null;
    }
}
