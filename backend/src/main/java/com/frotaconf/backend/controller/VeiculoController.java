package com.frotaconf.backend.controller;

import com.frotaconf.backend.model.Veiculo;
import com.frotaconf.backend.repository.VeiculoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Controlador REST para gerenciar Veículos.
 * Permite a comunicação clara entre o frontend e o banco de dados.
 */
@RestController
@RequestMapping("/api/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoRepository repository;

    /**
     * Retorna a lista de todos os veículos cadastrados.
     */
    @GetMapping
    public List<Veiculo> listarTodos() {
        return repository.findAll();
    }

    /**
     * Adiciona um novo veículo ao sistema.
     * @param veiculo Dados do veículo enviados pelo front.
     * @return O veículo salvo com o respectivo ID gerado.
     */
    @PostMapping
    public ResponseEntity<Veiculo> adicionar(@Valid @RequestBody Veiculo veiculo) {
        Veiculo salvo = repository.save(veiculo);
        return new ResponseEntity<>(salvo, HttpStatus.CREATED);
    }

    /**
     * Altera o status de um veículo existente.
     * @param id ID do veículo a ser alterado.
     * @param novoStatus Novo status em formato JSON (ex: {"status": "Em Dia"}).
     * @return O veículo atualizado.
     */
    @PutMapping("/{id}/status")
    public ResponseEntity<Veiculo> alterarStatus(@PathVariable Long id, @RequestBody Veiculo novoStatus) {
        Optional<Veiculo> veiculoOpt = repository.findById(id);
        
        if (veiculoOpt.isPresent()) {
            Veiculo veiculo = veiculoOpt.get();
            veiculo.setStatus(novoStatus.getStatus());
            repository.save(veiculo);
            return ResponseEntity.ok(veiculo);
        }
        
        return ResponseEntity.notFound().build();
    }
}
