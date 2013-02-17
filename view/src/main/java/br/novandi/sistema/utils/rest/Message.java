package br.novandi.sistema.utils.rest;

import java.util.Collection;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonAutoDetect()
@JsonIgnoreProperties(ignoreUnknown = true)
public class Message {

	private String description;

	private Collection<Message> errors;

	public Message() {
		// TODO Auto-generated constructor stub
	}

	public Message(String description) {
		this.description = description;
	}
	
	public Message(String description, Collection<Message> errors) {
		this.description = description;
		this.setErrors(errors);
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Collection<Message> getErrors() {
		return errors;
	}

	public void setErrors(Collection<Message> errors) {
		this.errors = errors;
	}

}
