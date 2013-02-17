package br.novandi.sistema.utils.persistence;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.inject.spi.Bean;
import javax.enterprise.inject.spi.BeanManager;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.hibernate.EntityMode;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.metadata.ClassMetadata;

public class UniqueValidator extends SessionAwareConstraintValidator<Object>
		implements ConstraintValidator<Unique, Object> {

	private String[] fields;

	public void initialize(Unique annotation) {
		this.fields = annotation.properties();
	}

	public boolean isValidInSession(Object value,
			ConstraintValidatorContext context) {
		if (value == null) {
			return true;
		}
		return countRows(value) == 0;
	}

	private int countRows(Object value) {
		ClassMetadata meta = getSessionFactory().getClassMetadata(
				value.getClass());
		String idName = meta.getIdentifierPropertyName();
		Serializable id = meta.getIdentifier(value,
				(SessionImplementor) getTmpSession());

		DetachedCriteria criteria = DetachedCriteria.forClass(value.getClass());
		for (String field : fields) {
			criteria.add(Restrictions.eq(field,
					meta.getPropertyValue(value, field)));
		}
		criteria.add(Restrictions.ne(idName, id)).setProjection(
				Projections.rowCount());

		List results = criteria.getExecutableCriteria(getTmpSession()).list();
		Number count = (Number) results.iterator().next();
		return count.intValue();
	}
}