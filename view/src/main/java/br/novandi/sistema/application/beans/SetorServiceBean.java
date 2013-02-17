package br.novandi.sistema.application.beans;

import java.util.Collection;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

import br.novandi.sistema.domain.model.Setor;
import br.novandi.sistema.repository.SetorRepository;

@Stateless
public class SetorServiceBean {

	@Inject
	private SetorRepository setorRepository;

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Setor create(Setor setor) {
		return setorRepository.save(setor);
	}

	public Setor retrieveById(Long id) {
		return setorRepository.findOne(id);
	}

	public Collection<Setor> retrieveAll() {
		return setorRepository.findAll();
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void delete(Long id) {
		setorRepository.delete(id);
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Setor update(Setor setor) {
		return setorRepository.update(setor);
	}
	
}
