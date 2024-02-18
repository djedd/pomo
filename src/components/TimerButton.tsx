// Libraries
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';

interface TimerButtonProps {
  isActive: boolean;
  handleStartStop: () => void;
}

const TimerButton: FC<TimerButtonProps> = ({ isActive, handleStartStop }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleStartStop}>
      <Text style={styles.itemStyle}>{isActive ? "STOP" : "START"}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  itemStyle: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
});

export default TimerButton