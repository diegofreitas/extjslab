package br.novandi.sistema.utils.rest;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import br.novandi.sistema.utils.rest.ConstraintViolationExceptionMapper.ValidationMessage;

@Provider
public class DefaultExceptionMapper implements ExceptionMapper<Exception> {

	@Override
	public Response toResponse(Exception ex) {
		Throwable rootCause = getRootCause(ex);
		if(rootCause instanceof ConstraintViolationException){
			Set<ConstraintViolation<?>> constraintViolations =((ConstraintViolationException) rootCause).getConstraintViolations();
			Collection<Message> errors = new ArrayList<Message>();
			for(ConstraintViolation<?> violation: constraintViolations){
				errors.add(new ValidationMessage(violation.getPropertyPath().toString(), violation.getMessage()));
			}
			
			return Response.status(Status.BAD_REQUEST).entity(new Message("Existem erros de Validacao",errors)).build();
		}else{
			return Response.serverError().entity(new Message("Sistema Mau, muito mau")).build();
		}
	}
	
	private Throwable getRootCause(Exception ex){
		Throwable actual = null ;
		Throwable root = ex;
		while((actual = root.getCause()) != null){
			root = actual;
		}
		return root;
	}

}
