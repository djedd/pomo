// Libraries
import { POMODORO_OPTIONS } from '@/shared/constants';
import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface HeaderProps {
  setTime: (value: number) => void;
  setCurrentTime: (value: number) => void;
  currentTime: number
}

const Header: FC<HeaderProps> = ({ currentTime, setCurrentTime, setTime }) => {
  const handlePress = (index: number) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index)
    setTime(newTime * 60);
  };

  return (
    <View style={styles.viewStyle}>
      {POMODORO_OPTIONS.map((item, index) => (
        <TouchableOpacity
          key={`${item}_${index}`}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  itemStyle: {
    width: '33%',
    alignItems: "center",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
  },
  viewStyle: {
    flexDirection: 'row',
  }
});

export default Header