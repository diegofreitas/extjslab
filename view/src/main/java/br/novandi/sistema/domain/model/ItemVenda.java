package br.novandi.sistema.domain.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@JsonAutoDetect(fieldVisibility=Visibility.ANY,getterVisibility=Visibility.NONE, isGetterVisibility=Visibility.NONE)
@JsonIgnoreProperties({"handler"})
public class ItemVenda extends AbstractPersistable<Long>{
	
	private Double total;
	
	private Double quantidade;
	
	@ManyToOne
	private Produto produto;
	
	@ManyToOne()
	private Venda venda;
	
}
