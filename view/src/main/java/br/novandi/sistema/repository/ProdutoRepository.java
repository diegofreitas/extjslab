package br.novandi.sistema.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.novandi.sistema.domain.model.Funcionario;
import br.novandi.sistema.domain.model.Produto;

@SuppressWarnings("unchecked")
public interface ProdutoRepository extends JpaRepository<Produto, Long>, JpaSpecificationExecutor<Produto>{

}
