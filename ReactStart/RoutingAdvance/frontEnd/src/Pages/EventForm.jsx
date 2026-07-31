import { Form, useNavigate,useNavigation,useParams,useRouteLoaderData  } from "react-router-dom"
import {useMutation, useQueryClient } from '@tanstack/react-query';
import {useFetchSingleEvent} from '../http'

const EventForm = ({method}) => {
  // const data = useActionData();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const { eventId } = useParams();

  // const { data: event, isLoading: isEventLoading, error: eventError } = useFetchSingleEvent(eventId);

  // const {mutate:editEventMutation,isLoading:isEditing,error} = useMutation(
  //   ['editEvent', eventId],{
  //   // (formData) => formEvent({ id: eventId, request: formData }),{
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('event');
  //       navigate('/events');
  //     },  
  //   }
  // );

  // if (isEventLoading) {
  //   return <p>Loading...</p>
  // }

  // const [eventData, setEventData] = useState(event);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    editEventMutation(formData); 
  };

  return (
    <>
      {isEditing && <p className='text-center'>Editing...</p>}
      {error && <p className='text-center'>Error: {error.message}</p>}

      <Form onSubmit={handleSubmit} className="w-max-[40rem] my-8 mx-auto">
      <p>
        <label htmlFor="title" className="block w-[100%]">Title</label>
        <input  className="block w-[100%] text-inherit p-1" id="title"type="text"name="title" required value={event.title} />
      </p>
      <p>
        <label htmlFor="image" className="block w-[100%]">Image</label>
        <input className="block w-[100%] text-inherit p-1" id="image"type="url" name="image"required/>
      </p>
      <p>
        <label htmlFor="date" className="block w-[100%]">Date</label>
        <input className="block w-[100%] text-inherit p-1" id="date" type="date"name="date"required/>
      </p>
      <p>
        <label htmlFor="description" className="block w-[100%]">Description</label>
        <textarea className="block w-[100%] text-inherit p-1" id="description"name="description" rows="5" required />
      </p>
      <div className="flex g-4 content-end">
        <button className="bg-transparent text-[#ccc9c6] hover:bg-[#fab833]" type="button" onClick={()=>navigate('..')} disabled={isSubmitting}>  Cancel </button>
        <button className="bg-[#fae1af]" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
      </Form>
    </>
  );
};

export default EventForm;
