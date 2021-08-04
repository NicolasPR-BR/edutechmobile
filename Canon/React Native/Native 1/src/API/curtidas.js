const imgLike = (curtidas) =>{
    if(curtidas){
        return require('../../res/img/s2-checked.png');
    }else{
        return require('../../res/img/s2.png');
        
    }
};

const curtirFoto = (curtiu , likes) =>{
        let amnt = likes;
          if(curtiu === false){
              amnt = amnt + 1;
          }else{
              amnt = amnt -1;
          } 

        return [!curtiu, amnt];
    };

export {imgLike, curtirFoto}