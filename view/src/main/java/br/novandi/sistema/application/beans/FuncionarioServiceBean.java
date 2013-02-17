package br.novandi.sistema.application.beans;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import br.novandi.sistema.application.FuncionarioService;
import br.novandi.sistema.domain.model.Funcionario;
import br.novandi.sistema.repository.FuncionarioRepository;

@Stateless
public class FuncionarioServiceBean implements FuncionarioService {

	@Inject
	private FuncionarioRepository funcionarioRepository;

	@Override
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Funcionario create(Funcionario funcionario) {
		return funcionarioRepository.save(funcionario);
	}

	@Override
	public Funcionario retrieveById(Long id) {
		return funcionarioRepository.findOne(id);
	}

	@Override
	public Page<Funcionario> retrieveAll(PageRequest pageable) {
		
		return funcionarioRepository.findAll(pageable);
	}

	@Override
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void delete(Long id) {
		funcionarioRepository.delete(id);
	}

	@Override
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Funcionario update(Funcionario funcionario) {
		return funcionarioRepository.save(funcionario);
	}
	
}
