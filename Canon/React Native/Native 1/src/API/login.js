const efetuarLogin = async (usuario,senha) =>{
        let url = Platform.OS === 'ios' ? 'localhost' : '192.168.1.8'; //One line if statement, if true = 'Localhost' other 192.168

        const cabecalhoHTTP = {
            method:'POST',
            body: JSON.stringify({userName: usuario, password: senha}),
            headers: {'content-type': 'application/json'}
        }

        const resHTTP = await fetch(`http://${url}:3030/users/login`, cabecalhoHTTP);

        if(resHTTP.ok){
            return resHTTP.headers.get('x-access-token');
        }else{
            throw new Error("Não foi possível logar");
        }
   
}
export default efetuarLogin;