import React from 'react'

import alimentacao from '../../assets/images/alimentacao.svg';
import outros from '../../assets/images/outros.svg'
import transporte from '../../assets/images/transporte.svg'
import saude from '../../assets/images/saude.svg'
import utilidades from '../../assets/images/utilidades.svg'

import { Icone, IconeTema } from '../UI';

export default (type) =>{
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt='restaurante'/>,
        Transporte: <IconeTema src={transporte} alt='transporte' />,
        Utilidades: <IconeTema src={utilidades} alt='utilidades'/>,
        Saude: <IconeTema src={saude} alt='saude'/>,
        default: <IconeTema src={outros} alt='outros'/>,
    }
    return Images[type] || Images.default;
}