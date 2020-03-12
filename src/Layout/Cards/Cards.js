import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../store/actions';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import './Cards.css';

const Cards = props => {
  useEffect(() => {
    props.fetchCards();
  }, []);

  const displayCards = () => {
    if (props.error) {
      return <p>{props.errorDescription}</p>;
    }

    if (props.cards.length !== 0) {
      const cards = [];
      for (let i = 0; i < props.cards.length; i++) {
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

  if (props.loading) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <section className="cards">{displayCards()}</section>
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

export default connect(mapStateToProps, { fetchCards })(Cards);
