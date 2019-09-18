package br.com.clubecampestre.domain.entities;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Collection;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(generator = "user_gen")
    @SequenceGenerator(
            name = "user_gen",
            sequenceName = "user_seq",
            initialValue = 1,
            allocationSize = 1
    )
    private int id;

    @Column(name = "username", columnDefinition = "VARCHAR(30)")
    @NotBlank
    @Size(min = 4, max = 30)
    private String Username;

    @Column(name = "password", columnDefinition = "VARCHAR(80)")
    @NotBlank
    @Size(min = 60, max = 60)
    private String Password;

    @Transient
    private Collection<GrantedAuthority> GrantedAuthorities;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public Collection<GrantedAuthority> getGrantedAuthorities() {
        return GrantedAuthorities;
    }

    public void setGrantedAuthorities(Collection<GrantedAuthority> grantedAuthorities) {
        GrantedAuthorities = grantedAuthorities;
    }
}
