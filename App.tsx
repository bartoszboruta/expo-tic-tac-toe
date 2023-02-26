import { View, Text, Pressable, StyleSheet } from "react-native";

import { useState } from "react";

function Square({ value, onSquarePress }) {
  return (
    <Pressable style={styles.square} onPress={onSquarePress}>
      <Text>{value}</Text>
    </Pressable>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handlePress(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <View style={styles.status}>
        <Text>{status}</Text>
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[0]} onSquarePress={() => handlePress(0)} />
        <Square value={squares[1]} onSquarePress={() => handlePress(1)} />
        <Square value={squares[2]} onSquarePress={() => handlePress(2)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[3]} onSquarePress={() => handlePress(3)} />
        <Square value={squares[4]} onSquarePress={() => handlePress(4)} />
        <Square value={squares[5]} onSquarePress={() => handlePress(5)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[6]} onSquarePress={() => handlePress(6)} />
        <Square value={squares[7]} onSquarePress={() => handlePress(7)} />
        <Square value={squares[8]} onSquarePress={() => handlePress(8)} />
      </View>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <View key={move}>
        <Pressable onPress={() => jumpTo(move)}>
          <Text>{description}</Text>
        </Pressable>
      </View>
    );
  });

  return (
    <View style={styles.game}>
      <View style={styles.gameBoard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </View>
      <View style={styles.gameInfo}>
        <View>{moves}</View>
      </View>
    </View>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create({
  square: {},
  status: {},
  boardRow: {},
  game: {},
  gameBoard: {},
  gameInfo: {},
});
