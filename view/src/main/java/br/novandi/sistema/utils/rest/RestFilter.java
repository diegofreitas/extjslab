package br.novandi.sistema.utils.rest;

import java.io.IOException;

import javax.enterprise.context.NonexistentConversationException;
import javax.enterprise.context.spi.Context;
import javax.enterprise.inject.Instance;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Response.Status;

import org.jboss.weld.Container;
import org.jboss.weld.context.ConversationContext;
import org.jboss.weld.context.http.HttpConversationContext;

@WebFilter(urlPatterns = "/rest/*")
public class RestFilter implements Filter {

	@Override
	public void destroy() {

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain arg2) throws IOException, ServletException {
		String cid = null;
		try {
			cid = (String) request.getParameterMap().get("cid")[0];
		} catch (NullPointerException e) {
		}

		ConversationContext conversationContext = instance().select(
				HttpConversationContext.class).get();

		try {
			conversationContext.activate(cid);
			arg2.doFilter(request, response);
		} catch (NonexistentConversationException non) {
			( ( HttpServletResponse ) response ).setStatus( Status.PRECONDITION_FAILED.getStatusCode() );
			response.getWriter().print("Nao existe uma conversao com este ID");
			return;
		} finally {
			conversationContext.invalidate();
			conversationContext.deactivate();	
		}
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

	private static Instance<Context> instance() {
		return Container.instance().deploymentManager().instance()
				.select(Context.class);
	}

}
