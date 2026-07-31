import EventsList from '../Pages/EventsList';
import EventItem from '../Pages/EventItem';
import { useFetchSingleEvent, useFetchEvents } from '../http';
import { useParams } from 'react-router-dom';

const EventsDetailPage = () => {
  const params = useParams()
  const { data: event, isLoading: eventLoading, error: eventError } = useFetchSingleEvent(params.eventId);
  const { data: events, isLoading: eventsLoading, error: eventsError } = useFetchEvents();

  if (eventLoading || eventsLoading) return <p className='text-center'>Loading...</p>;
  if (eventError || eventsError)  return <p className='text-center'>Error: {eventError?.message}</p>;
  
  return (
    <>
      <EventItem event={event} />
      <EventsList events={events} />
    </>
  );
};

export default EventsDetailPage;
