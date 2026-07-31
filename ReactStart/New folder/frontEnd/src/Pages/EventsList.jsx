import { Link } from "react-router-dom"

const EventsList = ({events}) => {
  return (
    <div className="my-8 mx-auto w-max-[40rem]">
        <h1>All Events</h1>
        <ul className="flex flex-col gap-4">
            {events.map((event)=>(
                <li key={event.key}>
                    <Link to={`/events/${event.id}`} className="no-underline text-inherit flex overflow-hidden rounded-md bg-[#fab833;] hover:bg-[#fbc14d] transform scale-102">
                        <img src={event.image} alt={event.title} className="w-[33%] object-cover"/>
                        <div className="p-4">
                            <h2 className="mx-0 my-0 mb-4">{event.title}</h2>
                            <time>{event.date}</time>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default EventsList