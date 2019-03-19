import React from 'react';
import { clipId } from '../../constants';
import ReactAnimationFrame from 'react-animation-frame';

const CORNER_RADIUS = 3;

const ClipPath2 = ({ graphicId, dims }) => (
  <clipPath id={clipId(graphicId)}>
    <rect {...dims} rx={CORNER_RADIUS} ry={CORNER_RADIUS} />
  </clipPath>
);

class ClipPath extends React.Component {
  rect = React.createRef();
  onAnimationFrame(time) {
    if (time > 5000) {
      time -= 5000;
      this.rect.current.setAttribute('transform', `translate(${time / 2}, ${time / 2})`);}
  }
  render() {
    const { graphicId } = this.props;
    return (
      <clipPath id={clipId(graphicId)}>
        <rect ref={this.rect} x={100} y={100} width={100} height={100} rx={CORNER_RADIUS} ry={CORNER_RADIUS} />
      </clipPath>
    );
  }
}

export default ReactAnimationFrame(ClipPath);
