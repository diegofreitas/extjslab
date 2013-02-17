package br.novandi.sistema.application.beans;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import br.novandi.sistema.domain.model.Venda;
import br.novandi.sistema.repository.VendaRepository;

@Stateless
public class VendasServiceBean  {

	@Inject
	private VendaRepository repository;


	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Venda create(Venda venda) {
		return repository.save(venda);
	}

	public Venda retrieveById(Long id) {
		return repository.findOne(id);
	}


	public Page<Venda> retrieveAll(PageRequest pageable) {
		return repository.findAll(pageable);
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void delete(Long id) {
		repository.delete(id);
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Venda update(Venda funcionario) {
		return repository.save(funcionario);
	}
	
}
