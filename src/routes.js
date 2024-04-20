import React from 'react';

const EventList = React.lazy(() => import('./screens/event/Event'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/events', name: 'Event', component: EventList, role: ['Admin', 'Super Admin'] },
];

export default routes;
