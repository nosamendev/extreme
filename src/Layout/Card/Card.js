import React from 'react';
import './Card.css';

const Card = props => {
  const images = require.context('../../images', true);
  let img = images('./' + props.image);

  return (
    <div className="card" data-number={props.id}>
      <div
        className="image-container"
        style={{ backgroundImage: 'url(' + img + ')' }}
      ></div>

      <div className="contents-container">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="button-container">
          <button type="button">CTA</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
