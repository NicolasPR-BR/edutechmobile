const lerFotos = async(callback) => {
    const fotosHTTP = await fetch('http://192.168.1.8:3030/feed');
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);

}
export default lerFotos;