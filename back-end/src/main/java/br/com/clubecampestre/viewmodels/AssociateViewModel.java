package br.com.clubecampestre.viewmodels;

import br.com.clubecampestre.domain.entities.AssociateEntity;
import br.com.clubecampestre.domain.valueobjects.AssociateTypeEnum;

import java.util.Collection;

public class AssociateViewModel {
    private int id;
    private String name;
    private String rg;
    private String cpf;
    private String telNumber;
    private String cellNumber;
    private String address;
    private String number;
    private String reference;
    private String complement;
    private String district;
    private String zipCode;
    private String city;
    private String state;
    private int bankCode;
    private String bankName;
    private String bankAgency;
    private String bankAccount;
    private AssociateTypeEnum associateType;
    private int sponsorId;
    private String sponsorName;
    private Collection<AssociateViewModel> dependents;
    private boolean hasDependents;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelNumber() {
        return telNumber;
    }

    public void setTelNumber(String telNumber) {
        this.telNumber = telNumber;
    }

    public String getCellNumber() {
        return cellNumber;
    }

    public void setCellNumber(String cellNumber) {
        this.cellNumber = cellNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getBankCode() {
        return bankCode;
    }

    public void setBankCode(int bankCode) {
        this.bankCode = bankCode;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankAgency() {
        return bankAgency;
    }

    public void setBankAgency(String bankAgency) {
        this.bankAgency = bankAgency;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

    public AssociateTypeEnum getAssociateType() {
        return associateType;
    }

    public void setAssociateType(AssociateTypeEnum associateType) {
        this.associateType = associateType;
    }

    public int getSponsorId() {
        return sponsorId;
    }

    public void setSponsorId(int sponsorId) {
        this.sponsorId = sponsorId;
    }

    public String getSponsorName() {
        return sponsorName;
    }

    public Collection<AssociateViewModel> getDependents() { return dependents; }

    public void setDependents(Collection<AssociateViewModel> dependents) {
        this.dependents = dependents;
        hasDependents = dependents != null && dependents.size() > 0;
    }

    public boolean getHasDependents() { return hasDependents; }

    public void setHasDependents(boolean hasDependents) { this.hasDependents = hasDependents; }

    public void setSponsorName(String sponsorName) {
        this.sponsorName = sponsorName;
    }

    public static AssociateViewModel fromDomainEntity(AssociateEntity associate) {
        AssociateViewModel destiny = new AssociateViewModel();
        destiny.setId(associate.getId());
        destiny.setName(associate.getName());
        destiny.setRg(associate.getRg());
        destiny.setCpf(associate.getCpf());
        destiny.setTelNumber(associate.getTelNumber());
        destiny.setCellNumber(associate.getCellNumber());
        destiny.setAddress(associate.getAddress());
        destiny.setNumber(associate.getNumber());
        destiny.setReference(associate.getReference());
        destiny.setComplement(associate.getComplement());
        destiny.setDistrict(associate.getDistrict());
        destiny.setZipCode(associate.getZipCode());
        destiny.setCity(associate.getCity());
        destiny.setState(associate.getState());
        destiny.setBankCode(associate.getBankCode());
        destiny.setBankName(associate.getBankName());
        destiny.setBankAgency(associate.getBankAgency());
        destiny.setBankAccount(associate.getBankAccount());
        destiny.setAssociateType(associate.getAssociateType());
        AssociateEntity sponsor = associate.getSponsor();
        if(sponsor != null) {
            destiny.setSponsorId(sponsor.getId());
            destiny.setSponsorName(sponsor.getName());
        }
        return destiny;
    }

    public AssociateEntity toDomainEntity() {
        AssociateEntity associate = new AssociateEntity();
        associate.setId(getId());
        associate.setName(getName());
        associate.setRg(getRg());
        associate.setCpf(getCpf());
        associate.setTelNumber(getTelNumber());
        associate.setCellNumber(getCellNumber());
        associate.setAddress(getAddress());
        associate.setNumber(getNumber());
        associate.setReference(getReference());
        associate.setComplement(getComplement());
        associate.setDistrict(getDistrict());
        associate.setZipCode(getZipCode());
        associate.setCity(getCity());
        associate.setState(getState());
        associate.setBankCode(getBankCode());
        associate.setBankName(getBankName());
        associate.setBankAgency(getBankAgency());
        associate.setBankAccount(getBankAccount());
        associate.setAssociateType(getAssociateType());
        return associate;
    }
}
