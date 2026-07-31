import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteEvent } from '../http';
import { NavLink } from 'react-router-dom';

const EventItem = ({event}) => {
    const queryClient = useQueryClient();
    const {mutate:deleteMutaion,isLoading:isDeleting,error:deleteError} = useMutation({mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries('event');
          },
    })
    if (isDeleting) return <p className='text-center'>Deleting..</p>;
    if (deleteError) return <p className='text-center'>Error: {error.message}</p>;

    const startDeleteHandler = () => {
        const proceed =  window.confirm('Are you sure?');
        if(proceed) {
            deleteMutaion(event.id) 
            window.location.href = "/events" 
        }
    }   

    return (
        <article className="w-max-[50rem] my-8 mx-auto text-center">
            <img src={event.image} alt={event.title} className="w-[30rem] rounded-md"/>
            <h1>{event.title}</h1>
            <time>{event.title}</time>
            <p>{event.description}</p>
            <menu className="flex gap-4 content-center  items-center p-0">
                <NavLink to={`/events/${event.id}/edit`} className="py-1 px-4 no-underline cursor-pointer">Edit</NavLink>
                <button onClick={startDeleteHandler} className="py-1 px-4 no-underline cursor-pointer bg-transparent border-0  text-[#fab833]">Delete</button>
            </menu>
        </article>
    )
}

export default EventItem