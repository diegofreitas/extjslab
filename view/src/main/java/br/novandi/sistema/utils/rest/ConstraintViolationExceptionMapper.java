package br.novandi.sistema.utils.rest;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
@Consumes({MediaType.APPLICATION_JSON, "text/json"})
@Produces({MediaType.APPLICATION_JSON, "text/json"})
public class ConstraintViolationExceptionMapper implements ExceptionMapper<ConstraintViolationException>{
	@Override
	public Response toResponse(ConstraintViolationException ex) {
		
		Set<ConstraintViolation<?>> constraintViolations = ex.getConstraintViolations();
		Collection<Message> errors = new ArrayList<Message>();
		for(ConstraintViolation<?> violation: constraintViolations){
			errors.add(new ValidationMessage(violation.getPropertyPath().toString(), violation.getMessage()));
		}
		
		return Response.status(Status.BAD_REQUEST).entity(new Message("Existem erros de Validacao",errors)).build();
	}
	
	static class ValidationMessage extends Message{
		
		/**
		 * no cliente os erros de validacao sao tratados como arrays e o ext usa id ao inves de field
		 * para usar field tem que encapsular os erros em um Ext.data.Errors
		 */
		private String id;
		public ValidationMessage(String id, String msg) {
			super();
			this.setId(id);
			this.msg = msg;
		}
		private String msg;
		
	
		public String getMsg() {
			return msg;
		}
		public void setMsg(String msg) {
			this.msg = msg;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
	}

}