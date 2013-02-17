package br.novandi.sistema.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;
import org.hibernate.validator.constraints.NotBlank;

@Entity
@JsonAutoDetect(fieldVisibility=Visibility.ANY,getterVisibility=Visibility.NONE, isGetterVisibility=Visibility.NONE)
public class Setor {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY )
	private Long id;
	
	@NotBlank
	private String descricao;
}
