package br.novandi.sistema.domain.model;

import javax.persistence.Entity;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@JsonAutoDetect(fieldVisibility=Visibility.ANY,getterVisibility=Visibility.NONE, isGetterVisibility=Visibility.NONE)
@JsonIgnoreProperties({"handler"})
public class Produto extends AbstractPersistable<Long>{
	
	private String descricao;
	
	private Double preco;

}
