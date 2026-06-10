package com.frotaconf.backend.repository;

import com.frotaconf.backend.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositório Spring Data JPA para a entidade Veiculo.
 * Oferece métodos prontos para salvar, buscar, deletar etc., de forma simplificada.
 */
@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
}
