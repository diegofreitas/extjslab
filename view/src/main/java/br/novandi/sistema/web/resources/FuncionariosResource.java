package br.novandi.sistema.web.resources;

import java.util.Collection;
import java.util.List;

import javax.inject.Inject;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
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
import org.springframework.data.jpa.domain.Specification;

import br.novandi.sistema.application.FuncionarioService;
import br.novandi.sistema.domain.model.Funcionario;
import br.novandi.sistema.repository.FuncionarioRepository;

@Path("funcionarios")
public class FuncionariosResource {
	
	@Inject
	private FuncionarioService funcionarioService;
	
	@Inject 
	private FuncionarioRepository repository;
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Funcionario postResource(Funcionario funcionario) {
		return funcionarioService.create(funcionario);
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Funcionario getResource(@PathParam("id") Long id) {
		return funcionarioService.retrieveById(id);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Page<Funcionario> getResources(@QueryParam("page") int page, @QueryParam("limit") int limit,@QueryParam("nome") String nome) {
		PageRequest pageRequest = new PageRequest(page -1, limit);
		Page<Funcionario> result = repository.findAll( pageRequest);
		return result;
	}
	
	@GET
	@Path("/vendedores")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Funcionario> getVendedores() {
		return repository.findAll( );

	}

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void deleteResource(@PathParam("id") Long id) {
    	funcionarioService.delete(id);
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Funcionario putResource(Funcionario funcionario) {
    	return funcionarioService.update(funcionario);
    }
    
    

}