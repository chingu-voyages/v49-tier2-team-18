import React, { useState, Fragment } from 'react';
import { hsvaToHex } from '@uiw/color-convert';
import { hsvaToRgbaString } from '@uiw/color-convert';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import Alpha from '@uiw/react-color-alpha';
import Material from '@uiw/react-color-material';
import EditableInputHSLA from '@uiw/react-color-editable-input-hsla';
import './ColorPicker.css'

function ColorPicker() {

  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

  return (
    <div className="color-picker-div">
      <Fragment>
        <div className="color-picker-container">
          <h1 style= {{ color: hsvaToHex(hsva) }} className="color-picker-title">Choose a color...</h1>
          <Wheel className="color-picker-wheel" color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
          <ShadeSlider
          hsva={hsva}
          style={{ width: 210, marginTop: 20 }}
          onChange={(newShade) => {
            setHsva({ ...hsva, ...newShade });
          }}
          />
          <Material className="color-picker-material" style={{ width: '15%' }}
            color={hsva}
            onChange={(hsva) => {
              setHsva(color.hsva);
            }}
          />
          <Alpha style= {{ width: '25%' }} className="color-picker-alpha"
            hsva={hsva}
            onChange={(newAlpha) => {
              setHsva({ ...hsva, ...newAlpha });
            }}
          />
          <EditableInputHSLA className="color-picker-hsla"
            hsva={hsva}
            onChange={(color) => {
              setHsva({ ...hsva, ...color.hsva });
            }}
          />
          <div className="color-picker-color" style={{ width: '70%', height: 50, marginTop: 20, background: hsvaToRgbaString(hsva) }}></div>
        </div>
      </Fragment>
    </div>
  );
}

export default ColorPicker;