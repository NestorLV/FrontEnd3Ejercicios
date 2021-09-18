import React from 'react';
import Animal from '../Animal/Index';

function List(props) {
    const labels = props.labels;
    const animals = props.animals;
    return (
        <div>
            {labels.map((animalName,index)=>
                    (
                        <>
                            <h2>Nombre: {animalName}</h2>
                            <Animal data={animals[index]}/>
                        </>
                    )
                )
            }
        </div>
    );
}

export default List;