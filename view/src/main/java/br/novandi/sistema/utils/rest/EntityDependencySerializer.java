package br.novandi.sistema.utils.rest;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;
import org.springframework.data.jpa.domain.AbstractPersistable;

import br.novandi.sistema.domain.model.Contrato;

public class EntityDependencySerializer extends JsonSerializer<AbstractPersistable> {

	@Override
	public void serialize(AbstractPersistable entity,
			JsonGenerator jgen, SerializerProvider arg2) throws IOException,
			JsonProcessingException {
		if(entity.getId() == null){
			jgen.writeNull();
			return;
		}
		jgen.writeStartObject();
		jgen.writeNumberField("id", (Long)entity.getId());
		jgen.writeStringField("description", entity.toString());
		jgen.writeEndObject();
		
	}
	
	@Override
	public Class<AbstractPersistable> handledType() {
		// TODO Auto-generated method stub
		return AbstractPersistable.class;
	}
	
   
}
