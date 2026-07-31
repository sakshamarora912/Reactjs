

export async function fetchEvents(){
    const response = await fetch('http://localhost:8100/events')
    if(!response.ok){
      const error=await response.json();
      throw new Error(error.message || 'could not fetch events');
    }  
    const data=await response.json();
    return data.events;
}

export async function fetchEvent(id){
    const response = await fetch(`http://localhost:8100/events/${id}`)
    if(!response.ok){
      const error = await response.json()
      throw new Error(error.message || 'could not fetch detail of selected event') 
    }
    const resData = await response.json();
    return resData.event;
  }
  
export async function deleteEvent(id){
  const response = await fetch(`http://localhost:8100/events/${id}`, {method: 'DELETE',});
  if(!response.ok){
    const error = await response.json()
    throw new Error(error.message || 'could not delete events') 
  }
  const resData = await response.json();
  return resData.event;
}

export async function formEvent({ id, formData, method }) {
  const eventData = {
    title: formData.get('title'),
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description'),
  };

  let url = 'http://localhost:8100/events';
  if (method === 'PATCH') {
    url += `/${id}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not save event');
  }

  return response;
}