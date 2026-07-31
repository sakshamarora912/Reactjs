import { useQuery } from 'react-query';
import EventsList from '../Pages/EventsList';
import EventItem from '../Pages/EventItem';
import {fetchEvent,fetchEvents} from '../http';
import { useParams } from 'react-router-dom';

const EventsDetailPage = () => {
  const params = useParams()
  const { data: event, isLoading: eventLoading, error: eventError } = useQuery(['event', params.eventId], () => fetchEvent(params.eventId));
  const { data: events, isLoading: eventsLoading, error: eventsError } = useQuery('events', fetchEvents);

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
