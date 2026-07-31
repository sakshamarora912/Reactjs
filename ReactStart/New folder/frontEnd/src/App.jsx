import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query'
import { } from './http';
import RootLayout from './Pages/Root';
import ErrorPage from './Components/ErrorPage'
import HomePage from './Components/Home';
import EventsRootLayout from './Pages/EventsRoot';
import EventsPage from './Components/EventsPage';
import EditEventPage from './Components/EditEventPage';
import EventsDetailPage from './Components/EventsDetailPage';
import NewEventPage from './Components/NewEventPage';
import NewsletterPage from './Components/NewsletterPage';

const router = createBrowserRouter([
  {path: '/',element: <RootLayout />,errorElement: <ErrorPage />,children: [
    {index: true, element: <HomePage /> },
    {path: 'events',element: <EventsRootLayout />,children: [
      {index: true,element: <EventsPage />},
      {path: ':eventId',id: 'event-detail',children: [
        {index: true,element: <EventsDetailPage />},
        { path: 'edit', element: <EditEventPage />},
      ]},
      {path: 'new', element: <NewEventPage />},
    ]},
    {path:'newsLetter',element:<NewsletterPage/>}
  ]},
]);


export const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};

export default AppRoutes
