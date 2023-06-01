import React from 'react';
import './Card.css';

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2 className="card-title">¡Información ingresada!</h2>
      <div className="card-content">
        <p>Tu nombre es: {input1}</p>
        <p>Tu comida favorita es: {input2}</p>
      </div>
    </div>
  );
};

export default Card;