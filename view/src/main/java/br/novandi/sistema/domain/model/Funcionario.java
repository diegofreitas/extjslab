package br.novandi.sistema.domain.model;


import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.validation.constraints.NotNull;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.data.jpa.domain.AbstractPersistable;

import br.novandi.sistema.utils.rest.EntityDependencySerializer;

@Entity
@JsonAutoDetect(fieldVisibility=Visibility.ANY,getterVisibility=Visibility.NONE, isGetterVisibility=Visibility.NONE)
public class Funcionario extends AbstractPersistable<Long>{

	public Funcionario(Long id, String nome) {
		super();
		this.setId(id);
		this.nome = nome;
	}

	Funcionario() {
	}
	/*@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY )
	private Long id;*/
	
	@NotBlank
	@NotNull
	private String nome;
	
	@CPF
	private String cpf;
	
	private String rg;
	
	private String fone;
	
	@Email
	private String email;
	
	private Sexo sexo;
	
	private  String endereco;
	
	private Calendar nascimento;
	
	private Calendar admissao;
	
	@ManyToOne
	private Setor setor;
	
	@ManyToOne
	private Contrato contrato;
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return this.nome;
	}

	/*@JsonSerialize(using=EntityDependencySerializer.class)
	public Contrato getContrato() {
		return contrato;
	}

	public void setContrato(Contrato contrato) {
		this.contrato = contrato;
	}*/

	
}
