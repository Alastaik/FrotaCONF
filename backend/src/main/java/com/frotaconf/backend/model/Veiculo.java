package com.frotaconf.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/**
 * Entidade que representa um veículo no banco de dados.
 * A anotação @Data do Lombok gera automaticamente Getters, Setters, toString, etc.
 */
@Entity
@Table(name = "veiculos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "A placa é obrigatória")
    @Column(nullable = false, unique = true, length = 10)
    private String placa;

    @NotBlank(message = "O modelo é obrigatório")
    @Column(nullable = false, length = 100)
    private String modelo;

    // Status pode ser "Em Dia" ou "Manutenção Pendente"
    @NotBlank(message = "O status é obrigatório")
    @Column(nullable = false, length = 50)
    private String status;
}
