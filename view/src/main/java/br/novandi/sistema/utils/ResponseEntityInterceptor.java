package br.novandi.sistema.utils;

import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;
import javax.ws.rs.core.Response;


//@ResponseEntity @Interceptor
public class ResponseEntityInterceptor {

   @AroundInvoke 
   public Object wrapResponse(InvocationContext ctx) throws Exception {
	   Response proceed = (Response) ctx.proceed();
	   return Response.fromResponse(proceed).entity(new Wrapper(proceed.getEntity()));
   }

}