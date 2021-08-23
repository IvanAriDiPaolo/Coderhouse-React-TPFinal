import React, {useState, useEffect} from 'react'
import {database} from '../../firebase/firebase'
import { AgregarOpinion } from './AgregarOpinion';
import {Opinion} from './Opinion';

export const OpinionesContainer = () => {

    const [opiniones, setOpiniones] = useState([]);

    const agregarOp = (nombre, opinion) =>{
        let OpinionNueva = {
            nombre: nombre,
            opinion: opinion,
            likes: 1,
            fecha: new Date().toString(),
        }
    
        let opinionesNuevas = database.collection("Opiniones");
        
        opinionesNuevas
        .add(OpinionNueva)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(obtenerOpiniones());
    }

    const sumarLike = async (id) => {
        let opinionesRemotas = database.collection("Opiniones");
        let opinionLikeada = opinionesRemotas.doc(id)
        let likesAnteriores = await opinionLikeada
        .get()
        .then((res) => res.data().likes) //el res es el objeto, la data es la info y accedemos a los likes
    
    
        opinionLikeada.update({
            likes: likesAnteriores +1
        }).then(() => obtenerOpiniones()).catch((err) => alert(err))
    }

    const obtenerOpiniones = async () =>{
        let opinionesRemotos = database.collection("Opiniones")
        let opinionesFetcheadas = await opinionesRemotos
            .get()
            .then((query) => (query.docs.map((item) => ({ ...item.data(), id: item.id }))))
        setOpiniones(opinionesFetcheadas)
    };
    
    const borrarOpiniones = async () => {
        let opinionesRemotas = database.collection("Opiniones")
        const query = await opinionesRemotas.get();
        const batch = database.batch();
        query.docs.forEach((op) => batch.delete(op.ref));
        batch.commit();
        obtenerOpiniones();
    }



    useEffect(() => {
        obtenerOpiniones();
        console.log(opiniones)
    })

    return (
            <section>
                <AgregarOpinion agregarOp={agregarOp}/>
                {opiniones.map((item) => (<Opinion data={item} key={item.id} sumarLike={sumarLike}/>))}
                <button onClick={borrarOpiniones}>Borrar opiniones</button>
            </section>
    )
}
