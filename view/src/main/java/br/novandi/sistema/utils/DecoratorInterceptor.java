package br.novandi.sistema.utils;

import java.io.IOException;
import java.lang.reflect.Method;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.ext.Provider;

import org.jboss.resteasy.annotations.interception.Precedence;
import org.jboss.resteasy.annotations.interception.ServerInterceptor;
import org.jboss.resteasy.spi.interception.AcceptedByMethod;
import org.jboss.resteasy.spi.interception.MessageBodyWriterContext;
import org.jboss.resteasy.spi.interception.MessageBodyWriterInterceptor;

@Provider
@ServerInterceptor
@Precedence("DECODER")
public class DecoratorInterceptor implements MessageBodyWriterInterceptor,
		AcceptedByMethod {

	public boolean accept(Class declaring, Method method) {
		return method.isAnnotationPresent(ResponseEntity.class);
	}

	public void write(MessageBodyWriterContext context) throws IOException,WebApplicationException {
		//context.setEntity(new Wrapper(context.getEntity()));
		context.proceed();
	}
}