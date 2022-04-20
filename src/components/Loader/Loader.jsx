import React from 'react';
import './Loader.scss';

export default function Loader() {
  return (
    <div className="loaderWrapper">
      <div className="ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
