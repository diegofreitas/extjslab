package br.novandi.sistema.repository;

import java.util.Collection;

import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.enterprise.inject.Any;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import br.novandi.sistema.domain.model.Setor;

@SuppressWarnings("unchecked")
public class SetorRepository /*extends JpaRepository<Pessoa, Long>, JpaSpecificationExecutor<Pessoa>*/{
	@Inject
	@Any
	private EntityManager em;

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Setor update(Setor pessoa) {
		em.merge(pessoa);
		return pessoa;
	}

	@SuppressWarnings("unchecked")
	public Collection<Setor> findAll() {
		return em.createQuery("from Setor").getResultList();
	}

	public Setor findOne(Long id) {
		return em.find(Setor.class, id);
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Setor save(Setor pessoa) {
		em.persist(pessoa);
		return pessoa;
	}

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void delete(Long id) {
		em.remove(em.getReference(Setor.class, id));
	}
}
