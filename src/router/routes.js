const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/Home.vue') },
      { path: 'speaker', name: 'speaker', component: () => import('pages/Speaker.vue') },
      { path: 'schedule', name: 'schedule', component: () => import('pages/Schedule.vue') },
      { path: 'venue', name: 'venue', component: () => import('pages/Venue.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
