// les hooks sont toujours préfixés de 'use...'
import React, { useState } from 'react';

const Like = () => {

    // Pour pouvoir gérer l'état on créer 2 variables dont la seconde est une fonction associée 
    // à la première qui permet de changer l'état
    let [nbIfLikes, setNbOfLikes] = useState(0); // valeur initiale

    return ( 
        <div>
            {nbIfLikes}
            <button onClick={() => setNbOfLikes(nbIfLikes + 1)}>Like</button>
        </div>
     );
}
 
export default Like;