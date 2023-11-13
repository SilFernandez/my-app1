// Componente Contador
import React, {useState, Fragment} from 'react';

//funcion con manejo de estados
const Contador = () => {

    //inicializando variable
    const [numero, setNumero] = useState(0);

    //definicion de variable para contador
    const aumentar = () => {
        console.log('hice click')
        setNumero(numero + 1)
    }
    //uso de la variable
    return (
        <Fragment>
            <h3>Mi primer Contador {numero}</h3>
            <button onClick={aumentar}>aumentar</button>
        </Fragment>
    );
}
export default Contador;