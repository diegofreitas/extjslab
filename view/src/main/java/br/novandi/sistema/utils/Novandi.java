package br.novandi.sistema.utils;

import javax.enterprise.inject.spi.Bean;
import javax.enterprise.inject.spi.BeanManager;
import javax.naming.AuthenticationException;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class Novandi {

	private static BeanManager manager;

	public static <T> T getInstance(Class<T> clasz) {
		BeanManager bm = getBeanManager();
		Bean<?> autenticacaoService = bm.resolve(bm.getBeans(clasz));
		T service = (T) bm.getReference(autenticacaoService, clasz,
				bm.createCreationalContext(autenticacaoService));
		return service;
	}

	private static BeanManager getBeanManager() {
		if (manager == null) {
			InitialContext ctx = null;
			try {
				ctx = new InitialContext();
			} catch (NamingException e1) {
				e1.printStackTrace();

			}
			manager = null;
			try {
				manager = (BeanManager) ctx.lookup("java:comp/BeanManager");
			} catch (NamingException e1) {
				e1.printStackTrace();

			}
		}
		return manager;
	}

}
