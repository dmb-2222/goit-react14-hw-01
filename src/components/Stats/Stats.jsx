import React from "react";
import PropTypes from 'prop-types';
import styles from "./Stats.module.css";

const Stats = ({ title = "", stats }) => {
  return (
    <section className={styles.statsSection}>
        {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(counter => (
          <li className={styles.item} key={counter.id}>
            <span className={styles.label}>{counter.label}</span>
            <span className={styles.percentage}>{counter.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };
  Stats.defaultProps = {
    title: '',
  };
  Stats.defaultProps = {
    stats: [],
  };
export default Stats;
