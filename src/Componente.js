/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Componente = (props) => {
    return (
      <div className='UserConteiner'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.foto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.nome}</h5>
            <p className="card-text">{props.cargo}</p>
            <a href="#" className="btn btn-primary">Seguir</a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Componente;