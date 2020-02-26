export default {
    type: 'object',
    name: 'menuItem',
    title: 'Sub-menu',
    fields: [
      {title: 'Menu text', name: 'text', type: 'string'},
      {
        title: 'Menu items',
        name: 'menuItems',
        type: 'array',
        of: [
          {
            type: 'reference',
            title: 'Child page',
            description: 'Pick a page from the dropdown list below',
            to: [
              {
                type: 'page'
              }
            ]
          },
          {type: 'menuItem'}
        ]
      }
    ]
  };
  