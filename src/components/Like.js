// les hooks sont toujours préfixés de 'use...'
import React, { useState } from "react";
import { Row, Col } from "antd";

const Like = () => {
  // Pour pouvoir gérer l'état on créer 2 variables dont la seconde est une fonction associée
  // à la première qui permet de changer l'état
  let [nbIfLikes, setNbOfLikes] = useState(0); // valeur initiale

  return (
    <div>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={4}>
          {nbIfLikes}
          <button className="button-like" onClick={() => setNbOfLikes(nbIfLikes + 1)}>
            Likes
          </button>
        </Col>
            ici le code
        <Col span={4} />
      </Row>
    </div>
  );
};

export default Like;
