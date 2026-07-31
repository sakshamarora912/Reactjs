import { useState } from 'react'
import { EXAMPLES } from '../data.js'
import Tabs from './Tabs.jsx';

const Examples = () => {
    const [selectedTopic,setSelectedTopic]=useState();
      const handleSelect=(selectedButton) => setSelectedTopic(selectedButton);
    let tabContent = <p>Please select a topic.</p>

    if(selectedTopic){
        tabContent=(
            <div className="p-4 rounded-md bg-[#1b082f]">
                <h3 className='m-0'>{EXAMPLES[selectedTopic].title}</h3>
                <h3 className='m-0'>{EXAMPLES[selectedTopic].description}</h3>
                <pre><code className='text-base'>{EXAMPLES[selectedTopic].code}</code></pre>
            </div>
        )
    }
  return (
    <section className='my-12 mx-auto'>
        <Tabs buttonTitle="menu" button={
            <>
                <button className={`hover:bg-[#1b082f] p-1 m-2 rounded-lg ${selectedTopic === 'components' ? 'bg-[#7925d3]' : "" }`} onClick={() => handleSelect('components')}>Components</button>
                <button className={`hover:bg-[#1b082f] p-1 m-2 rounded-lg ${selectedTopic === 'jsx' ? 'bg-[#7925d3]' : ""}`} onClick={() => handleSelect('jsx')}>JSX</button>
                <button className={`hover:bg-[#1b082f] p-1 m-2 rounded-lg ${selectedTopic === 'props' ? 'bg-[#7925d3]' : ""}`} onClick={() => handleSelect('props')}>Props</button>
                <button className={`hover:bg-[#1b082f] p-1 m-2 rounded-lg ${selectedTopic === 'state' ? 'bg-[#7925d3]' : ""}`} onClick={() => handleSelect('state')}>State</button>
                {/* <button classNameName={isSelected?'active':""} onClick={onSelect}>{children}</button> */}
            </>
        }>
        {tabContent}
        </Tabs>
    </section>
  )
}

export default Examples