package br.novandi.sistema.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.novandi.sistema.domain.model.Funcionario;
import br.novandi.sistema.domain.model.Venda;

@SuppressWarnings("unchecked")
public interface VendaRepository extends JpaRepository<Venda, Long>, JpaSpecificationExecutor<Venda>, Serializable{

	
}
