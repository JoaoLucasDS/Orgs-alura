import logo from '../../assets/logo.png'

import tomato from '../../assets/frutas/Tomate.png'
import broccoli from '../../assets/frutas/Brócolis.png'
import potato from '../../assets/frutas/Batata.png'
import cucumber from '../../assets/frutas/Pepino.png'
import pumpkin from '../../assets/frutas/Abóbora.png'


const Basket = {
    header: {
        title: "Detalhe da cesta"
    },
    details:{
        title: "Cesta de Verduras",
        logo: logo,
        name: "Jenny Jack Farm",
        description: 
            "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha.",
        price: "R$ 40,00",
        button: "Comprar"
    },
    itens:{
        title: "Itens da cesta:",
        list:[
            {
                name:"Tomate",
                image: tomato,
            },
            {
                name:"Brócolis",
                image: broccoli,
            },
            {
                name:"Batata",
                image: potato,
            },
            {
                name:"Pepino",
                image: cucumber,
            },
            {
                name:"Abóbora",
                image: pumpkin,
            },
        ]
    }
}

export default Basket;