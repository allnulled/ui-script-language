{
	const reducir_sentencia_a_html = function(ast) {
		console.log("ast");
		const { tag, atributos, contenido } = ast;
		let html = "";
		html += "<";
		html += tag;
		if(atributos) {
			for(let i=0; i<atributos.length; i++) {
				const { clave, valor } = atributos[i];
				html += " ";
				html += clave;
				html += "=";
				html += valor;
			}
		}
		html += ">";
		if(contenido) {
			html += "\n";
			if(Array.isArray(contenido)) {
				for(let i=0; i<contenido.length; i++) {
					const item = contenido[i];
					html += reducir_sentencia_a_html(item);
				}
			} else if(typeof contenido === "string") {
				html += contenido;
			}
			html += "\n";
		}
		html += "</";
		html += tag;
		html += ">";
		return html;
	};
	const reducir_sentencias = function(sentencias) {
		return sentencias.map(item => reducir_sentencia_a_html(item)).join("\n");
	};
}

Language = Sentencias

Sentencias = 
	token0:_*
	sentencias:Sentencia*
    token1:_*
    	{ return reducir_sentencias(sentencias) }

Sentencia = Tag

Tag =
	token0:_*
	token1:"!"
	tag:Nombre
    atributos:Atributos?
    contenido:Contenido?
    	{ return { tag, atributos, contenido } }

Nombre =
	[A-Za-z0-9_\-:$]+ 
  		{ return text() }

Atributos = 
	token0:_*
	token1:"["
    atributos:Atributo*
    token2:"]"
    	{ return atributos }

Atributo =
	token0:_*
	clave:Nombre
    token1:"="
    valor:Texto_entre_comillas
    	{ return { clave, valor } }

Texto_entre_comillas = Texto_entre_comillas_simples / Texto_entre_comillas_dobles

Texto_entre_comillas_simples =
	token1:("'")
    texto:((!("'"))('\\\\'/"\\'"/.))*
    token2:("'")
    	{ return text() }

Texto_entre_comillas_dobles =
	token1:('"')
    texto:((!('"'))('\\\\'/'\\"'/.))*
    token2:('"')
    	{ return text() }

Contenido = 
	contenido:(Contenido_2 / Contenido_1)
    	{ return contenido }

Contenido_2 =
	token0:_*
    token1:"{{"
    contenido:Negacion_de_cierre_de_dobles_corchetes_curvados
    token2:"}}"
    	{ return contenido }

Negacion_de_cierre_de_dobles_corchetes_curvados =
	contenido:(!("}}")("\\}}"/.))+ 
		{ return text().trim() }

Contenido_1 =
	token0:_*
    token1:"{"
    contenido:Sentencias
    token2:"}"
    	{ return contenido }

_ = __ / ___ {}
__ = "\t" / " " {}
___ = "\r\n" / "\r" / "\n" {}