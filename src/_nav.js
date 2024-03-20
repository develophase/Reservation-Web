export default {
  items: [
    {
      title: true,
      name: 'Menu',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Events',
      icon: 'icon-star',
      children: [
        {
          name: 'Create Events',
          url: '/events',
          icon: 'icon-arrow-right',
          role: ['Admin', 'Super Admin']
        },
      ]
    },
  ],
};
