import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../Pages/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');
  console.log(data)
  return <EventForm method="patch" />;
}

export default EditEventPage