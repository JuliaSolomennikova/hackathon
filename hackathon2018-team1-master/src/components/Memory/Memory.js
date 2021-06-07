import React from 'react';
import styles from './style.css';
import Card from "../Card/Card";
import PropTypes from 'prop-types'
import GetOrder from "../Random/Random";

const modes = {
    easy: {
        width: 4,
        height: 4,
    }
};

export default class Memory extends React.Component {
    constructor(props) {
        super(props);
        if (!modes[props.mode]) {
            this.mode = 'easy';
        }
        else {
            this.mode = props.mode;
        }
        this.field = GetOrder(modes[this.mode].width * modes[this.mode].height);
        this.foundPairs = [];
        this.state = {
            openedCards: []
        };
    }

    render() {
        return (
            <div>
                <h1 className={styles.title}>Мем.Ори!</h1>
                <div className={styles.field}>
                    <div className={styles.memory}>
                        {renderCards(this.field, this.state.openedCards, this.foundPairs, this.handleClick)}
                    </div>
                </div>
            </div>
        );
    }

    handleClick = (card) => {
        let newState = this.state.openedCards;
        if (this.foundPairs.some(c => c === card.cardType)) {
            return;
        }
        if (this.state.openedCards.length === 2) {
            if(this.state.openedCards[0].cardType !== this.state.openedCards[1].cardType) {
                this.state.openedCards.forEach(open => open.opened = false);
            }
                this.setState({
                    openedCards: []
                });
            newState = [];
        }
        newState.push(card);
        card.opened = true;
        if (newState.length === 2) {
            if (newState[0].cardType === newState[1].cardType && newState[0].id !== newState[1].id) {
                this.foundPairs.push(newState[0].cardType);
                if (this.foundPairs.length === modes[this.mode].width * modes[this.mode].height / 2) {
                    setTimeout(() => alert('ты подебил!'), 500);
                    this.foundPairs = [];
                }
                this.setState({openedCards: []});
            }
        }
        this.setState({
            openedCards: newState
        });
    }
}
Memory.propTypes = {
    mode: PropTypes.string,
};

function

renderCards(field, cardsState, foundPairs, onClick) {
    return field.map((card, id) => <Card opened={false} onClick={onClick} cardType={card} id={id} key={id}/>);
}