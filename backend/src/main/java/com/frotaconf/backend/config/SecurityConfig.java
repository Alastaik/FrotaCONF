package com.frotaconf.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

/**
 * Configuração de Segurança e CORS do Spring Boot.
 * Aqui garantimos que o Frontend (porta 5173) possa conversar com o Backend (porta 8080)
 * e também aplicamos a proteção por Basic Auth em nossas APIs.
 */
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(Customizer.withDefaults()) // Habilita o CORS conforme configurado abaixo
            .csrf(csrf -> csrf.disable()) // Desabilita CSRF para facilitar uso de APIs REST
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/**").authenticated() // Protege todos os endpoints /api/ com autenticação
                .anyRequest().permitAll()
            )
            .httpBasic(Customizer.withDefaults()); // Usa a autenticação básica (Basic Auth)

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        
        // Permite a origem do nosso frontend (Vite padrão)
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        // Permite o uso de credenciais, essencial para Basic Auth via Fetch
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // Aplica esta configuração para todos os endpoints da API
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
