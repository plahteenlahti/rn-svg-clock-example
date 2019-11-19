import React, {useState} from 'react';
import Svg from 'react-native-svg';
import {Dimensions} from 'react-native';
import ClockTicks from './ClockTicks';
import Hand from './Hand';
import {useInterval} from '../Helpers/Hooks';
import {getTime} from '../Helpers/Time';

const {width} = Dimensions.get('window');

const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;

const hourTickCount = 12;
const minuteTickCount = 12 * 6;

const Clock = () => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <Svg height={width} width={width}>
      <ClockTicks
        minutes={minuteTickCount}
        hours={hourTickCount}
        radius={radius}
        center={center}
      />
      <Hand
        angle={time.seconds}
        center={center}
        radius={radius}
        stroke="red"
        strokeWidth="1"
      />
      <Hand
        angle={time.minutes}
        center={center}
        radius={radius}
        stroke="white"
        strokeWidth="5"
      />
      <Hand
        angle={time.hours}
        center={center}
        radius={radius}
        stroke="white"
        strokeWidth="7"
      />
    </Svg>
  );
};

export default Clock;
