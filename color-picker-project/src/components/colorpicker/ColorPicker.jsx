import React, { useState } from 'react';
import { hsvaToRgbaString } from '@uiw/color-convert';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import Alpha from '@uiw/react-color-alpha';
import Material from '@uiw/react-color-material';
import EditableInputHSLA from '@uiw/react-color-editable-input-hsla';
import './ColorPicker.css'

function ColorPicker ({hsva, setHsva, hex, setHex}) {

    return (
      <div className="color-picker-div">
          <div className="color-picker-container">
            <h2 className="color-picker-title">Choose a color...</h2>
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
              onChange={(color) => {
                setHsva(color.hsva), setHex(color.hex);
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
      </div>
    );
  }

  export default ColorPicker;