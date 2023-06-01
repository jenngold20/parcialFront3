import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.trim().length < 3 || input1.trim() === '' || input2.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setShowCard(true);
      setErrorMessage('');
    }
  };

  return (
    <>
      <div className="container">
        <h1>Elegí tu comida favorita</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <label className="input-label">
            Decime tu nombre:
            <input
              type="text"
              placeholder="Escriba su nombre"
              className="input-field"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
          </label>

          <label className="input-label">
            ¿Cuál es tu comida favorita?
            <input
              type="text"
              className="input-field"
              placeholder="Comida favorita"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </label>

          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {showCard && <Card input1={input1} input2={input2} />}
      </div>
    </>
  );
};

export default App;