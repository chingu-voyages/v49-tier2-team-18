import React, { useState, useEffect } from 'react';
import { hsvaToRgbaString, hsvaToHex, hsvaToHsla, hsvaToRgba } from '@uiw/color-convert';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import Alpha from '@uiw/react-color-alpha';
import Material from '@uiw/react-color-material';
import EditableInputHSLA from '@uiw/react-color-editable-input-hsla';
import './ColorPicker.css'


function ColorPicker ({ colorCodeFormat, setCurrentColor }) {
  const [ hsva, setHsva ] = useState({ h: 214, s: 99, v: 99, a: 1 });
  const [ hsla, setHsla ] = useState(hsvaToHsla(hsva));
  const [ rgba, setRgba ] = useState(hsvaToRgba(hsva));
  const [ hex, setHex ] = useState(hsvaToHex(hsva));


  useEffect(() => {
    if (colorCodeFormat === "hsl") {
      const { h, s, l } = hsla
      const hslCode = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`
      setCurrentColor(hslCode)
    } else if (colorCodeFormat === "rgb") {
      const { r, g, b } = rgba
      const rgbCode = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
      setCurrentColor(rgbCode)
    } else {
      setCurrentColor(hex)
    }
  }, [colorCodeFormat, hsva ])

    return (
      <div className="color-picker-div">
          <div className="color-picker-container">
            <h2 className="color-picker-title">Choose a color...</h2>
            <Wheel className="color-picker-wheel"
            color={hsva}
            onChange={(color) => {
              setHsva({ ...hsva, ...color.hsva }), setHex(color.hex), setRgba(color.rgba), setHsla(color.hsla);
            }}
            />
            <ShadeSlider
            hsva={hsva}
            style={{ width: 210, marginTop: 20 }}
            onChange={(newShade) => {
              setHsva({ ...hsva, ...newShade }), setHex(hsvaToHex(hsva)), setRgba(hsvaToRgba(hsva)), setHsla(hsvaToHsla(hsva));
            }}
            />
            <Material className="color-picker-material" style={{ width: '15%' }}
              color={hsva}
              onChange={(color) => {
                setHsva(color.hsva), setHex(color.hex), setRgba(color.rgba), setHsla(color.hsla);
              }}
            />
            <Alpha style= {{ width: '25%' }} className="color-picker-alpha"
              hsva={hsva}
              onChange={(newAlpha) => {
                setHsva({ ...hsva, ...newAlpha }), setHex(hsvaToRgbaString(hsva));
              }}
            />
            <EditableInputHSLA className="color-picker-hsla"
              hsva={hsva}
              onChange={(color) => {
                setHsva({ ...hsva, ...color.hsva }), setHex(color.hex), setRgba(color.rgba), setHsla(color.hsla);
              }}
            />
            <div className="color-picker-color" style={{ width: '70%', height: 50, marginTop: 20, background: hsvaToRgbaString(hsva) }}></div>
          </div>
      </div>
    );
  }

  export default ColorPicker;