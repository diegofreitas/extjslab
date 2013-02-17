package br.novandi.sistema.utils.rest;

import java.text.SimpleDateFormat;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;

import org.codehaus.jackson.Version;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;
import org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion;
import org.codehaus.jackson.map.module.SimpleModule;
import org.jboss.resteasy.plugins.providers.jackson.ResteasyJacksonProvider;

@Provider
@Consumes({MediaType.APPLICATION_JSON, "text/json"})
@Produces({MediaType.APPLICATION_JSON, "text/json"})
public class NovandiJacksonConfigurator extends ResteasyJacksonProvider
{
    static final String DATE_FORMAT = "dd/MM/yyyy";
    static final Logger log = Logger.getLogger(NovandiJacksonConfigurator.class.getName());


    public NovandiJacksonConfigurator()
    {
        super();
        log.info("Configuring Jackson");

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationConfig.Feature.FAIL_ON_EMPTY_BEANS, false)
                .configure(SerializationConfig.Feature.WRITE_NULL_MAP_VALUES, false)
                .configure(SerializationConfig.Feature.WRITE_DATES_AS_TIMESTAMPS, false);
        //mapper.getSerializationConfig().setSerializationInclusion(Inclusion.NON_NULL);
        mapper.getSerializationConfig().withDateFormat(new SimpleDateFormat(DATE_FORMAT));

        SimpleModule module = new SimpleModule("Novandi", new Version(1, 0, 0, null));
        module.addSerializer(new EntityDependencySerializer());
        module.addSerializer(new HibernateProxySerializer());
        
        mapper.registerModule(module);

       setMapper(mapper);
    }
}
