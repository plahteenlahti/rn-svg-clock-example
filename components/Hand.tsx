import React from 'react';
import {G, Line} from 'react-native-svg';
import {polarToCartesian} from '../Helpers/Geometry';

interface Props {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: string;
  stroke: string;
}

const Hand = (props: Props) => {
  const {x, y} = polarToCartesian(
    props.center,
    props.center,
    props.radius,
    props.angle,
  );

  return (
    <Line
      x1={props.center}
      y1={props.center}
      x2={x}
      y2={y}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      stroke={props.stroke}
    />
  );
};

export default Hand;
