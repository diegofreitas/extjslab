package br.novandi.sistema.utils;

import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.annotate.JsonAutoDetect.Visibility;

@JsonAutoDetect(fieldVisibility=Visibility.ANY,getterVisibility=Visibility.NONE, isGetterVisibility=Visibility.NONE)
   public class Wrapper{
	   private int count = 10;
	   public Wrapper(Object root) {
		   this.root = root;
	}
	   private Object root;
   }