package br.com.clubecampestre.domain.services;

import br.com.clubecampestre.Infrastructure.repositories.UserEntityRepository;
import br.com.clubecampestre.domain.entities.UserEntity;
import br.com.clubecampestre.domain.valueobjects.CustomUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
@Component
public class CustomUserService implements UserDetailsService {

    @Autowired
    private UserEntityRepository repo;

    @Override
    public CustomUser loadUserByUsername(final String username) throws UsernameNotFoundException {
        UserEntity userEntity = null;
        try {
            userEntity = repo.getUser(username);
            Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
            grantedAuthorities.add(new SimpleGrantedAuthority("ADMIN"));
            userEntity.setGrantedAuthorities(grantedAuthorities);
            CustomUser customUser = new CustomUser(userEntity);
            return customUser;
        } catch (Exception e) {
            e.printStackTrace();
            throw new UsernameNotFoundException("O Usuário " + username + " não existe no sistema");
        }
    }
}
