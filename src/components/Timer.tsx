// Libraries
import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface TimerProps {
  time: number
}

const Timer: FC<TimerProps> = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.itemStyle}>{formattedTime}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  itemStyle: {
    fontWeight: "bold",
    fontSize: 80,
    textAlign: 'center',
    color: "#333333"
  },
  container: {
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
    flex: 0.3,
    justifyContent: "center",
  },
});

export default Timer