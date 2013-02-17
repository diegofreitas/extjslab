package br.novandi.sistema.utils.rest;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;
import org.hibernate.proxy.HibernateProxy;
import org.hibernate.proxy.pojo.javassist.JavassistLazyInitializer;

public class HibernateProxySerializer extends JsonSerializer<HibernateProxy> {

	@Override
	public void serialize(HibernateProxy proxy,
			JsonGenerator jgen, SerializerProvider provider) throws IOException,
			JsonProcessingException {
		provider.defaultSerializeNull(jgen);
	}
	
	@Override
	public Class<HibernateProxy> handledType() {
		// TODO Auto-generated method stub
		return HibernateProxy.class;
	}
	
   
}
