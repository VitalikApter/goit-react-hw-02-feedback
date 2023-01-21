import css from './Buttons.module.scss';


const Buttons = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.buttons}>
                <h2 className={css.title}>Please leave feedback</h2>
              <button onClick={onLeaveFeedback}>Good</button>
              <button onClick={onLeaveFeedback}>Neutral</button>
              <button onClick={onLeaveFeedback}>Bad</button>
        </div>
    )
}

export default Buttons;