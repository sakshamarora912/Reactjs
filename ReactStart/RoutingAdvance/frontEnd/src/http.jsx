import { useQuery } from "@tanstack/react-query";

export const useFetchEvents = () => useQuery({ 
  queryKey: ['events'], 
  queryFn: async () => {
    const response = await fetch('http://localhost:8080/events')
    if(!response.ok){
      const error=await response.json();
      throw new Error(error.message || 'could not fetch events');
    }  
    const data=await response.json();
    return data.events;
  }
});

export const useFetchSingleEvent = (eventId) => useQuery({ 
  queryKey: ['event', eventId], 
  queryFn: async (query) => {
    const eventId = query.queryKey[1]
    const response = await fetch(`http://localhost:8080/events/${eventId}`)
    if(!response.ok){
      const error = await response.json()
      throw new Error(error.message || 'could not fetch detail of selected event') 
    }
    const resData = await response.json();
    return resData.event;
  }
});
  
export async function deleteEvent(id){
  const response = await fetch(`http://localhost:8080/events/${id}`, {method: 'DELETE',});
  if(!response.ok){
    const error = await response.json()
    throw new Error(error.message || 'could not delete events') 
  }
  const resData = await response.json();
  return resData.event;
}

export async function formEvent({request,id}){
  const data = await request.formData();
  const eventData={
    title: data.get('title'), 
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }
  if(request.method === 'PATCH')
    url = 'http://localhost:8090/events' + id
  
  const response = await fetch(url,{
    method: request.method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(eventData),
  })
  if(!response.ok){
    const error = await response.json()
    throw new Error(error.message || 'could not delete events') 
  }

  if (response.status === 422) {
    return response;
  }
}
