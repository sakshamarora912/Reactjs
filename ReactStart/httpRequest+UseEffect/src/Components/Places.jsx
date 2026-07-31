export default function Places({title,places,onClick,fallbackText}){
  return (
    <section className="places-category">
      <h2>{title}</h2>
        {places.length === 0 && <p className='fallback-text'>{fallbackText}</p>}
        {places.length > 0 && (
            <ul className="places">
                {places.map((place) => (
                    <li key={place.id} className="place-item">
                        <button onClick={()=>onClick(place.id)}>
                        {place.image && (
                            <img 
                            src={`http://localhost:3000/${place.image.src}`}
                            onError={e=>e.target.src=place.image.src}
                            />
                        )}
                        <h3>{place.title}</h3>
                        </button>
                    </li>
                ))}
            </ul>
        )}
    </section>
  )
}