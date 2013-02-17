package br.novandi.sistema.utils;

import java.lang.annotation.Annotation;

import javax.ws.rs.core.MediaType;
import javax.xml.bind.Marshaller;

import org.codehaus.jackson.jaxrs.JacksonJsonProvider;
import org.jboss.resteasy.annotations.DecorateTypes;
import org.jboss.resteasy.spi.interception.DecoratorProcessor;

@DecorateTypes({MediaType.WILDCARD})
public class ResponseEntityProcessor implements DecoratorProcessor<Marshaller, ResponseEntity>{

	
	public Marshaller decorate(Marshaller marshaller, ResponseEntity arg1,
			Class arg2, Annotation[] arg3, MediaType arg4) {
		// TODO Auto-generated method stub

		return marshaller; 
	}

}
