import { Platform } from "react-native";

const lerFotos = async(callback) => {
    let url = Platform.OS === 'ios' ? 'localhost' : '192.168.1.8'; //One line if statement if true = 'Localhost' other 192.168

    const fotosHTTP = await fetch(`http://${url}:3030/feed`);
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);

}
export default lerFotos;