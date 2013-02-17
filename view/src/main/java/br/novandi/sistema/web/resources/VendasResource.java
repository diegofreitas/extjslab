package br.novandi.sistema.web.resources;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import br.novandi.sistema.application.beans.VendasServiceBean;
import br.novandi.sistema.domain.model.Venda;

@Path("vendas")
public class VendasResource {
	

	@Inject 
	private VendasServiceBean service;
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Venda postResource(Venda venda) {
		return service.create(venda);
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Venda getResource(@PathParam("id") Long id) {
		return service.retrieveById(id);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Page<Venda> getResources(@QueryParam("page") int page, @QueryParam("limit") int limit,@QueryParam("nome") String nome) {
		PageRequest pageRequest = new PageRequest(page -1, limit);
		Page<Venda> result = service.retrieveAll( pageRequest);
		return result;
	}

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteResource(@PathParam("id") Long id) {
    	service.delete(id);
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Venda putResource(Venda venda) {
    	return service.update(venda);
    }
    
    

}