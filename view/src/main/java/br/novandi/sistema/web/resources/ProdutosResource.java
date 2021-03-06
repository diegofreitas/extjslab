package br.novandi.sistema.web.resources;

import java.util.Collection;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.novandi.sistema.domain.model.Produto;
import br.novandi.sistema.repository.ProdutoRepository;

@Path("produtos")
public class ProdutosResource {
	
	@Inject
	private ProdutoRepository repository;
	
	/*@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Setor postResource(Setor setor) {
		return setorService.create(setor);
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Setor getResource(@PathParam("id") Long id) {
		return setorService.retrieveById(id);
	}*/
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Produto> getResources() {
		return repository.findAll();
	}

   /* @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteResource(@PathParam("id") Long id) {
    	setorService.delete(id);
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Setor putResource(Setor setor) {
    	return setorService.update(setor);
    }*/
    
    

}