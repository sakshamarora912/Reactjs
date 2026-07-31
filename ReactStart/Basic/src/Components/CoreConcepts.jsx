import {CORE_CONCEPTS} from '../data'

const CoreConcepts = () => {
  return (
    <section className='p-8 rounded-sm bg-slate-900 shadow-md'>
        <h2>Core Concepts</h2>
        <ul className='list-none m-0 p-0 flex justify-around flex-wrap gap-8 '>
          {CORE_CONCEPTS.map((item)=>(
            <li className='w-40 text-center'>
              <img className='h-14 w-24 object-cover' src={item.image}/>
              <h3 className='my-2 mx-0 text-[1.5em]'>{item.title}</h3>
              <p className='text-[1em]'>{item.description}</p>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default CoreConcepts