package br.novandi.sistema.domain.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@JsonAutoDetect(fieldVisibility=Visibility.ANY,getterVisibility=Visibility.NONE, isGetterVisibility=Visibility.NONE)
@JsonIgnoreProperties({"handler"})
public class Venda extends AbstractPersistable<Long>{

	private String codigo;
	
	@ManyToOne
	private Cliente cliente;
	
	@ManyToOne
	private Funcionario funcionario;
	
	@OneToMany(mappedBy="venda",targetEntity=ItemVenda.class,orphanRemoval=true,cascade={CascadeType.ALL},fetch=FetchType.EAGER)
	private Set<ItemVenda> itensVenda;
	
	
	private Double total;
}
