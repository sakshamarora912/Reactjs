import { useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery,useMutation} from '@tanstack/react-query';
import Header from '../Header.jsx';
import { fetchEvent,deleteEvent,queryClient} from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx'

export default function EventDetails() {
  const [isDeleting,setIsDeleting]=useState()
  const params = useParams();
  const Navigate=useNavigate()

  const { data, isPending, isError} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const{mutate,isPending:isPendingDeletion,isError:isErrorDeleting,error}=useMutation({
    mutationFn:deleteEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['events'],refetchType:'none'})
      Navigate('/events');
    }
  })
  const handleStartDelete=()=>setIsDeleting(true);
  const handleStopDelete=()=>setIsDeleting(false)
  const handleDelete=()=> mutate({id:params.id});

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock title="Failed to load event" message={ error.info?.message || 'Failed to fetch event data, please try again later.'}/>
      </div>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
   {isDeleting && (
     <Modal onClick={handleStopDelete}>
      <h2>Are you sure?</h2>
      <p>Do you reaaly want to delete this event?This action cannot be undone.</p>
      <div className='form-actions'>
        {isPendingDeletion && <p>Deleting please wait...</p>}
        {!isPendingDeletion && (
          <>
            <button onClick={handleStopDelete} className='button-text'>Cancel</button>
            <button onClick={handleDelete} className='button'>Delete</button>
          </>
        )}
      </div>
      {isErrorDeleting && <ErrorBlock title="failed to delete event" message={deleteError.infor?.message || 'failed to delet event, please try again later'}/>}
    </Modal>
   )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">View all Events</Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
