import React from 'react';
import {G, Line, Text} from 'react-native-svg';
import {polarToCartesian} from '../Helpers/Geometry';

interface Props {
  radius: number;
  center: number;
  minutes: number;
  hours: number;
}

const ClockTicks = (props: Props) => {
  const minutes = new Array(props.minutes).fill(1);
  const hours = new Array(props.hours).fill(1);
  const minuteSticks = minutes.map((minute, index) => {
    const start = polarToCartesian(
      props.center,
      props.center,
      props.radius,
      index * 5,
    );
    const end = polarToCartesian(
      props.center,
      props.center,
      props.radius,
      index * 5,
    );
    return (
      <Line
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        key={index}
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
      />
    );
  });

  const hourSticks = hours.map((hour, index) => {
    const start = polarToCartesian(
      props.center,
      props.center,
      props.radius - 10,
      index * 30,
    );

    const end = polarToCartesian(
      props.center,
      props.center,
      props.radius,
      index * 30,
    );

    const time = polarToCartesian(
      props.center,
      props.center,
      props.radius - 35,
      index * 30,
    );

    return (
      <G key={index}>
        <Line
          stroke="white"
          strokeWidth={3}
          strokeLinecap="round"
          x1={start.x}
          x2={end.x}
          y1={start.y}
          y2={end.y}
        />
        <Text
          textAnchor="middle"
          fontSize="17"
          fontWeight="bold"
          fill="white"
          alignmentBaseline="central"
          x={time.x}
          y={time.y}>
          {index === 0 ? 12 : index}
        </Text>
      </G>
    );
  });

  {
    hourSticks;
  }

  return (
    <G>
      {minuteSticks}
      {hourSticks}
    </G>
  );
};

export default ClockTicks;
