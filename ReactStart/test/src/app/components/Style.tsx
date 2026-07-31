import React, { useState, ChangeEvent } from 'react';

interface StyleState {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}

export default function Style() {
  const [headingStyle, setHeadingStyle] = useState<StyleState>({bold: false,italic: false,underline: false});
  const [headingFont, setHeadingFont] = useState<string>('10px');
  const [descriptionStyle, setDescriptionStyle] = useState<StyleState>({ bold: false, italic: false, underline: false});
  const [descriptionFont, setDescriptionFont] = useState<string>('10px');
  const [customCSS, setCustomCSS] = useState<string>('');

  const handleHeadingStyleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name,checked} = event.target;
    setHeadingStyle(prevStyle => ({ ...prevStyle, [name]: checked }));
  };

  const handleHeadingFontChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setHeadingFont(event.target.value);
  };

  const handleDescriptionStyleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name,checked} = event.target;
    setDescriptionStyle(prevStyle => ({ ...prevStyle, [name]: checked }));
  };

  const handleDescriptionFontChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDescriptionFont(event.target.value);
  };


  const handleCSSInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCustomCSS(event.target.value);
  };

  function CustomCSS(css: string): React.CSSProperties {
    const styles: React.CSSProperties = {};
    if (!css.trim()) return styles;
    css.split(';').forEach(style => {
        const [property, value] = style.split(':').map(str => str.trim());
        if (property && value) 
            styles[property as any] = value;
    });
    return styles;
  }
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
      <div>
        <h1>Description</h1>
        <label htmlFor="descriptionFont">Font Size:</label>
        <select id="descriptionFont" value={descriptionFont} onChange={handleDescriptionFontChange}>
          <option value="5px">5px</option>
          <option value="10px">10px</option>
          <option value="15px">15px</option>
          <option value="20px">20px</option>
        </select><br/>
        <input type="checkbox" id="description-bold" name="bold" checked={descriptionStyle.bold} onChange={handleDescriptionStyleChange}/>
        <label htmlFor="description-bold">Bold</label><br />
        <input type="checkbox" id="description-italic" name="italic" checked={descriptionStyle.italic} onChange={handleDescriptionStyleChange}/>
        <label htmlFor="description-italic">Italic</label><br />
        <input type="checkbox" id="description-underline" name="underline" checked={descriptionStyle.underline} onChange={handleDescriptionStyleChange}/>
        <label htmlFor="description-underline">Underline</label><br />
      </div>
    </form>
    <div>
      <h1 className="text-4xl font-bold mb-4">Hero Section</h1>
      <textarea className="w-full h-40 p-2 border border-gray-300 rounded-lg mb-4" value={customCSS} onChange={handleCSSInputChange} placeholder="Enter your custom CSS here..."></textarea>
      <div className="bg-gray-200 p-6 rounded-lg" style={{ ...CustomCSS(customCSS)}}>
        <p className="text-lg mb-2">Customized Hero Section</p>
      </div>
    </div>
  </div>
  
);
}

export {Style,headingStyle,headingFont, descriptionStyle,descriptionFont};
  