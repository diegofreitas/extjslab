package br.novandi.sistema.web.resources;

import java.util.Collection;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.novandi.sistema.application.beans.SetorServiceBean;
import br.novandi.sistema.domain.model.Setor;

@Path("setores")
public class SetoresResource implements SetorResource, Sdfsdf {
	
	@Inject
	private SetorServiceBean setorService;
	
	/* (non-Javadoc)
	 * @see br.novandi.sistema.web.resources.Sdfsdf#postResource(br.novandi.sistema.domain.model.Setor)
	 */
	@Override
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Setor postResource(Setor setor) {
		return setorService.create(setor);
	}
	
	/* (non-Javadoc)
	 * @see br.novandi.sistema.web.resources.Sdfsdf#getResource(java.lang.Long)
	 */
	@Override
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Setor getResource(@PathParam("id") Long id) {
		return setorService.retrieveById(id);
	}
	
	/* (non-Javadoc)
	 * @see br.novandi.sistema.web.resources.Sdfsdf#getResources()
	 */
	@Override
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Setor> getResources() {
		return setorService.retrieveAll();
	}

    /* (non-Javadoc)
	 * @see br.novandi.sistema.web.resources.Sdfsdf#deleteResource(java.lang.Long)
	 */
    @Override
	@DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteResource(@PathParam("id") Long id) {
    	setorService.delete(id);
    }

    /* (non-Javadoc)
	 * @see br.novandi.sistema.web.resources.Sdfsdf#putResource(br.novandi.sistema.domain.model.Setor)
	 */
    @Override
	@PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Setor putResource(Setor setor) {
    	return setorService.update(setor);
    }
    
    

}