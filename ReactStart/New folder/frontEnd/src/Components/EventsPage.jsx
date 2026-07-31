import { useQuery } from 'react-query';
import EventsList from '../Pages/EventsList';
import { fetchEvents } from '../http';

function EventsPage() {
  const { data: events, isLoading, error } = useQuery('events', fetchEvents);

  if (isLoading)
    return <p className='text-center'>Loading...</p>;

  if (error)
    return <p className='text-center'>Error: {error.message}</p>;

  return (
    <EventsList events={events} />
  );
}

export default EventsPage;
