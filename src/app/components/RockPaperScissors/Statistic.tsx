import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./table.css";
import styles from "./Game.module.scss";

export function StatisticTable() {
  const [statistic, setStatistic] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8082/statistic')
      .then(response => response.json())
      .then(data => setStatistic(data));
  }, []);

  if (!statistic) {
    return <p>Loading...</p>;
  }

  const { totalRound, firstPlayerWinsCount, secondPlayerWinsCount, drawCount } = statistic;

  return (
    <div className={styles.main}>
      <h1 className={styles.title}> Game statistic: </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Total Round</th>
            <th>First Player Wins Count</th>
            <th>Second Player Wins Count</th>
            <th>Draw Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalRound}</td>
            <td>{firstPlayerWinsCount}</td>
            <td>{secondPlayerWinsCount}</td>
            <td>{drawCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticTable;