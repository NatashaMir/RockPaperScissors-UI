'use client';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import styles from "./Game.module.scss";
import "./table.css";


interface Round{
  firstPlayer : string;
  secondPlayer : string;
  gameResult : string;
}

function GameComponent() {
  const [gameId, setGameId] = useState(undefined);
  const [rounds, setRounds] = useState([]);

  const getGame = async () => {
    const response = await axios.get(`http://localhost:8080/play/${gameId}`);
    console.log(response);
    setRounds(response.data.rounds);
  };

  const restartGame = async () => {
    const response = await axios.get('http://localhost:8080/restart');
    console.log(response);
    setGameId(response.data.gameId);
    setRounds([]);
  };

  return (
    <div className={styles.main}>
      <label htmlFor="gameId">Game ID: {gameId}</label>
      <div>      
        <button onClick={getGame}>Get Game</button>
        <button onClick={restartGame}>Restart Game</button>
      </div>

    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>First Player</th>
            <th>Second Player</th>
            <th>Game result</th>
          </tr>
        </thead>
        <tbody>
          {rounds.map((round : Round, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{round.firstPlayer}</td>
              <td>{round.secondPlayer}</td>
              <td>{round.gameResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default GameComponent;
