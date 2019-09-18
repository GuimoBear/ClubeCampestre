package br.com.clubecampestre.domain.services;

import java.io.IOException;
import java.util.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import io.jsonwebtoken.Claims;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class TokenAuthenticationService {
    static final long EXPIRATION_TIME = 860_000_000; // 10 dias
    static final String SECRET = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKzdqwRqw2hL7AVWZoKhUSP8R2KJRQMOvki1g2GNGKgsPMl9t4ayTTqKaF53Eb/iI43k5RUGEr9RRJKi6cvFWY8CAwEAAQ==";
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";
    static final String ROLES_CLAIM_NAME = "ROLES";

    private static ArrayList<String> makeRolesClaim(Authentication auth) {
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        ArrayList<String> authsList = new ArrayList<>(authorities.size());
        for (GrantedAuthority authority : authorities) {
            authsList.add(authority.getAuthority());
        }
        return authsList;
    }

    private static Collection<GrantedAuthority> readAuthorities(Claims body) {
        Collection<?> roles = body.get(ROLES_CLAIM_NAME, Collection.class);

        if (null != roles) {
            ArrayList<GrantedAuthority> authsList = new ArrayList<>(roles.size());

            for (Object role : roles) {
                authsList.add(new SimpleGrantedAuthority(role.toString()));
            }

            return Collections.unmodifiableList(authsList);
        } else {
            return Collections.emptyList();
        }
    }

    public static void addAuthentication(HttpServletResponse response, Authentication auth) {
        String JWT = Jwts.builder()
                .setSubject(auth.getName())
                .claim(ROLES_CLAIM_NAME, makeRolesClaim(auth))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();

        response.setStatus(HttpServletResponse.SC_OK);
        try {
            String content = "{\"username\":\"" + auth.getName() + "\",\"token\":\"" + JWT + "\"}";
            response.setContentLength(content.length());
            response.getWriter().write(content);
            response.getWriter().flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
        response.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
    }

    public static Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);

        if (token != null) {
            Claims jwtBody = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody();
            // faz parse do token
            String user = jwtBody.getSubject();

            if (user != null) {
                return new UsernamePasswordAuthenticationToken(user, null, readAuthorities(jwtBody));
            }
        }
        return null;
    }
}
