
const UseFetch ={
    ListaAutores: () =>{
        
        return fetch('https://localhost:8000/api/autor').then(res => res.json());

    },
    CriaAutor: autor =>{
        return fetch('http://localhost:3000/api/autor', {method: 'POST', header: {'content-type': 'application/json'}, body: autor});
    },
    ListaNomes: () =>{
        
        return fetch('https://localhost:8000/api/autor/nome').then(res => res.json());

    },
    ListaLivros: () => {
        return fetch('https://localhost:8000/api/autor/livro').then(res => res.json());
    },
    RemoveAutor: id =>{
        return fetch('https://localhost:8000/api/autor/'+id, {method: 'DELETE', headers: {'content-type':'application/json'},}).then(res => res.json());
    },

}

export default UseFetch;