import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../store/actions';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import './Cards.css';

const Cards = props => {
  useEffect(() => {
    props.fetchCards();
  }, []);

  const [openCardsNumber, setOpenCardsNumber] = useState(5);

  const addCardRef = useCallback(node => {
    if (node) {
      if (openCardsNumber === 5) {
        node.classList.add('disabled');
      } else {
        node.classList.remove('disabled');
      }
    }
  });

  const removeCardRef = useCallback(node => {
    if (node) {
      if (openCardsNumber === 1) {
        node.classList.add('disabled');
      } else {
        node.classList.remove('disabled');
      }
    }
  });

  const displayCards = () => {
    if (props.error) {
      return <p>{props.errorDescription}</p>;
    }

    if (props.cards.length !== 0) {
      const cards = [];
      for (let i = 0; i < openCardsNumber; i++) {
        cards[i] = (
          <Card
            key={props.cards[i].id}
            id={props.cards[i].id}
            image={props.cards[i].image}
            title={props.cards[i].title}
            text={props.cards[i].text}
          />
        );
      }
      return cards;
    }
  };

  const addCard = () => {
    if (openCardsNumber < 5) {
      setOpenCardsNumber(openCardsNumber + 1);
    }
  };

  const removeCard = () => {
    if (openCardsNumber > 1) {
      setOpenCardsNumber(openCardsNumber - 1);
    }
  };

  if (props.loading) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <section className="cards">{displayCards()}</section>
      <div className="actions-container">
        <span onClick={addCard} ref={addCardRef}>
          Add Card
        </span>
        <span onClick={removeCard} ref={removeCardRef}>
          Remove Card
        </span>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.fetchCardsReducer.cards,
    errorDescription: state.fetchCardsReducer.description.message,
    error: state.fetchCardsReducer.error,
    loading: state.fetchCardsReducer.loading
  };
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  fetchCards: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorDescription: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { fetchCards })(Cards);
