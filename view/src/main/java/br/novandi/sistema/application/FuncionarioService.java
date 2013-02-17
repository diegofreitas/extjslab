package br.novandi.sistema.application;

import javax.ejb.Local;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import br.novandi.sistema.domain.model.Funcionario;

@Local
public interface FuncionarioService {

	public Funcionario create(Funcionario funcionario);

	public Funcionario retrieveById(Long id);

	public Page<Funcionario> retrieveAll( PageRequest pageable);

	public void delete(Long id);

	public Funcionario update(Funcionario funcionario);

	
}
