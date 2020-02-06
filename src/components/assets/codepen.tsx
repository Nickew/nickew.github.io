import React from 'react';

const Codepen = ({ color }: { color?: string }) => (
  <svg height="24" viewBox="0 0 24 24" width="24">
    <polygon
      fill="none"
      points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <line
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      x1="12"
      x2="12"
      y1="22"
      y2="15.5"
    />
    <polyline
      fill="none"
      points="22 8.5 12 15.5 2 8.5"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <polyline
      fill="none"
      points="2 15.5 12 8.5 22 15.5"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <line
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      x1="12"
      x2="12"
      y1="2"
      y2="8.5"
    />
  </svg>
);

export default Codepen;
