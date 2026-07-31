import React, { useState, ChangeEvent } from 'react';

interface StyleState {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}

export default function Style() {
  const [headingStyle, setHeadingStyle] = useState<StyleState>({bold: false,italic: false,underline: false});
  const [headingFont, setHeadingFont] = useState<string>('10px');

  const handleHeadingStyleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name,checked} = event.target;
    setHeadingStyle(prevStyle => ({ ...prevStyle, [name]: checked }));
  };

  const handleHeadingFontChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setHeadingFont(event.target.value);
  };
  return (
    <div>
      <form>
        <div>
          <h1>Heading</h1>
          <label htmlFor="headingFont">Font Size:</label>
          <select id="headingFont" value={headingFont} onChange={handleHeadingFontChange}>
            <option value="5px">5px</option>
            <option value="10px">10px</option>
            <option value="15px">15px</option>
            <option value="20px">20px</option>
          </select>
          <br/><br/>
          <input type="checkbox" id="heading-bold" name="bold" checked={headingStyle.bold} onChange={handleHeadingStyleChange}/>
          <label htmlFor="heading-bold">Bold</label><br />
          <input type="checkbox" id="heading-italic" name="italic" checked={headingStyle.italic} onChange={handleHeadingStyleChange}/>
          <label htmlFor="heading-italic">Italic</label><br />
          <input type="checkbox" id="heading-underline" name="underline" checked={headingStyle.underline} onChange={handleHeadingStyleChange}/>
          <label htmlFor="heading-underline">Underline</label><br/><br/>
      </div>
      </form>
   </div>
  )
}   