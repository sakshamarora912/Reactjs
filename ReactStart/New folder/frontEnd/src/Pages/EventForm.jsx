import { Form, useNavigate, useParams } from "react-router-dom";
import { useMutation } from 'react-query';
import { queryClient } from "../App";
import { formEvent } from "../http";

const EventForm = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const { mutate: editEventMutation, isLoading: isEditing, error } = useMutation(
    ['editEvent', eventId],
    (formData) => formEvent({ id: eventId, formData, method: eventId ? 'PATCH' : 'POST' }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('event');
        navigate('/events');
      },
    }
  );

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
          <input className="block w-[100%] text-inherit p-1" id="title" type="text" name="title" required />
        </p>
        <p>
          <label htmlFor="image" className="block w-[100%]">Image</label>
          <input className="block w-[100%] text-inherit p-1" id="image" type="url" name="image" required />
        </p>
        <p>
          <label htmlFor="date" className="block w-[100%]">Date</label>
          <input className="block w-[100%] text-inherit p-1" id="date" type="date" name="date" required />
        </p>
        <p>
          <label htmlFor="description" className="block w-[100%]">Description</label>
          <textarea className="block w-[100%] text-inherit p-1" id="description" name="description" rows="5" required />
        </p>
        <div className="flex g-4 content-end">
          <button className="bg-transparent text-[#ccc9c6] hover:bg-[#fab833]" type="button" onClick={() => navigate('..')} disabled={isEditing}>Cancel</button>
          <button className="bg-[#fae1af]" disabled={isEditing}>{isEditing ? 'Submitting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
};

export default EventForm;
