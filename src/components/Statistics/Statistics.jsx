import css from './Statistics.module.scss';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={css.statistics}>
                <h2 className={css.title}>Statistics</h2>
                <p className={css.text}>Good: {good} </p>
                <p className={css.text}>Neutral: {neutral}</p>
                <p className={css.text}>Bad: {bad}</p>
                <p className={css.text}>Total: {total}</p>
                <p className={css.text}>Positive feedback: {positivePercentage} %</p>
            </div>
    )
};

export default Statistics;