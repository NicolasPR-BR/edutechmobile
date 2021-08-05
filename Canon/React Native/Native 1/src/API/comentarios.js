 const AdicionarComentario = (Comentarios,conteudoCampoInput) =>{
         
         const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Bugan"
        }
        return ([...Comentarios,novoComentario]);
 }

export {AdicionarComentario};