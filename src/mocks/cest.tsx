import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cest = {
    top: {
        title: "Detalhe da cesta",
    },
    details: {
        cestName: "Cesta de Verduras",
        farmName: "Jenny Jack Farm",
        description: "Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha",
        price: "R$40,00",
        button: "Comprar",
        farmLogo: logo
    },
    itens: {
        title: "Itens da cesta",
        list: [
            {
                listName: "Tomate",
                listImage: tomate,
            },
            {
                listName: "Brócolis",
                listImage: brocolis,
            },
            {
                listName: "Batata",
                listImage: batata,
            },
            {
                listName: "Pepino",
                listImage: pepino,
            },
            {
                listName: "Abóbora",
                listImage: abobora,
            },
        ]
    }
}

export default cest;