// Libraries
import Header from '@/components/Header';
import { TimerType } from '@/shared/sharedTypes';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';

export default function App(): JSX.Element {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState<number>(0);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={styles.view}>
        <Text style={styles.text}>Pomodoro</Text>
        <Text>{time}</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
      </View>
    </SafeAreaView>
  );
}

const colors: string[] = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  view: {
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
});
