package br.com.clubecampestre.domain.entities;

import br.com.clubecampestre.domain.utils.CPFValidator;
import br.com.clubecampestre.domain.valueobjects.AssociateTypeEnum;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.util.Lazy;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;

@Entity
@Table(name = "associates")
public class AssociateEntity {

    @Transient
    private Lazy<ArrayList<String>> errors = new Lazy<>(() -> new ArrayList<>());

    @Id
    @GeneratedValue(generator = "associate_gen")
    @SequenceGenerator(
            name = "associate_gen",
            sequenceName = "associate_seq",
            initialValue = 1,
            allocationSize = 1
    )
    private int id;


    @Column(name = "name", columnDefinition = "VARCHAR(127)", length = 127)
    @NotBlank
    @Size(min = 8, max = 127)
    private String name;

    @Column(name = "rg", columnDefinition = "VARCHAR(25)", length = 25)
    @NotBlank
    @Size(min = 3, max = 25)
    private String rg;

    @Column(name = "cpf", columnDefinition = "VARCHAR(11)", length = 11, unique = true)
    @NotBlank
    @Size(min = 11, max = 11)
    private String cpf;

    @Column(name = "telnumber", columnDefinition = "VARCHAR(10)", length = 10)
    @Size(min = 8, max = 10)
    private String telNumber;

    @Column(name = "cellnumber", columnDefinition = "VARCHAR(11)", length = 11)
    @Size(min = 9, max = 11)
    private String cellNumber;

    @Column(name = "address", columnDefinition = "VARCHAR(127)", length = 127)
    @Size(min = 4, max = 127)
    private String address;

    @Column(name = "number", columnDefinition = "VARCHAR(10)", length = 10)
    @Size(min = 1, max = 10)
    private String number;

    @Column(name = "reference", columnDefinition = "VARCHAR(127)", length = 127)
    @Size(min = 0, max = 127)
    private String reference;

    @Column(name = "complement", columnDefinition = "VARCHAR(127)", length = 127)
    @Size(min = 0, max = 127)
    private String complement;

    @Column(name = "district", columnDefinition = "VARCHAR(127)", length = 127)
    @Size(min = 3, max = 127)
    private String district;

    @Column(name = "zipcode", columnDefinition = "VARCHAR(8)", length = 8)
    @Size(min = 8, max = 8)
    private String zipCode;

    @Column(name = "city", columnDefinition = "VARCHAR(127)", length = 127)
    @Size(min = 3, max = 127)
    private String city;

    @Column(name = "state", columnDefinition = "VARCHAR(2)", length = 2)
    @Size(min = 2, max = 2)
    private String state;


    @Column(name = "bankcode", columnDefinition = "INTEGER")
    private int bankCode;

    @Column(name = "bankname", columnDefinition = "VARCHAR(127)", length = 127)
    @Size(min = 3, max = 127)
    private String bankName;

    @Column(name = "bankagency", columnDefinition = "VARCHAR(5)", length = 5)
    @Size(min = 5, max = 5)
    private String bankAgency;

    @Column(name = "bankaccount", columnDefinition = "VARCHAR(11)", length = 11)
    @Size(min = 2, max = 11)
    private String bankAccount;

    @Column(name = "associatetype", columnDefinition = "VARCHAR(9)", length = 9)
    @Enumerated(EnumType.STRING)
    private AssociateTypeEnum associateType;

    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "sponsorid", nullable = true)
    private AssociateEntity sponsor;

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
        if(this.cpf != null) {
            this.cpf = this.cpf.replaceAll("[\\.\\-]", "");
        }
    }

    public String getTelNumber() {
        return telNumber;
    }

    public void setTelNumber(String telNumber) {
        this.telNumber = telNumber;
        if(this.telNumber != null) {
            this.telNumber = this.telNumber.replaceAll("[\\(\\)\\- ]", "");
        }
    }

    public String getCellNumber() { return cellNumber; }

    public void setCellNumber(String cellNumber) {
        this.cellNumber = cellNumber;
        if(this.cellNumber != null) {
            this.cellNumber = this.cellNumber.replaceAll("[\\(\\)\\- ]", "");
        }
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
        if(this.zipCode != null) {
            this.zipCode = this.zipCode.replaceAll("[\\-]", "");
        }
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

    public AssociateEntity getSponsor() {
        return sponsor;
    }

    public void setSponsor(AssociateEntity sponsor) {
        this.sponsor = sponsor;
    }

    private boolean sponsorIsValid() {
        baseValidation();
        if(bankCode == 0) {
            errors.get().add("É necessario informar um banco para o débito das mensalidades");
        }
        if(bankAgency == null || bankAgency.length() == 0) {
            errors.get().add("É necessario informar uma agencia bancária para o débito das mensalidades");
        }
        if(bankAccount == null || bankAccount.length() == 0) {
            errors.get().add("É necessario informar uma conta bancária para o débito das mensalidades");
        }
        return errors.get().size() == 0;
    }

    private void baseValidation() {
        if(name == null || name.length() < 4) {
            errors.get().add("O nome do associado deve possuir ao menos quatro caracteres");
        }
        if(cpf == null || !CPFValidator.isCPF(cpf)) {
            errors.get().add("Deve ser informado um CPF válido");
        }
    }

    private boolean dependentIsValid() {
        baseValidation();
        if(sponsor == null) {
            errors.get().add("Um dependente deve ser vinculado a um patrocinador");
        }
        return errors.get().size() == 0;
    }

    public boolean isValid() {
        if(AssociateTypeEnum.DEPENDENT.equals(associateType)) {
            return dependentIsValid();
        } else if(AssociateTypeEnum.SPONSOR.equals(associateType)) {
            return sponsorIsValid();
        }
        errors.get().add("É necessario informar o tipo de associado");

        return false;
    }

    public ArrayList<String> getErrors() {
        return errors.get();
    }
}
