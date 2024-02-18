// Libraries
import Header from '@/components/Header';
import Timer from '@/components/Timer';
import TimerButton from '@/components/TimerButton';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import { Audio } from "expo-av";

export default function App(): JSX.Element {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    playSound();
    setIsActive(!isActive);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/podo__button.mp3")
    )
    await sound.playAsync();
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time -1);
      }, 10)
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={styles.view}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
        <Timer time={time}/>
        <TimerButton handleStartStop={handleStartStop} isActive={isActive} />
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
    flex: 1,
    marginTop: Platform.OS === "android" ? 20 : 0,
    paddingHorizontal: 15,
  },
});
