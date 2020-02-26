export default {
    title: 'Menu items',
    name: 'menuitems',
    description: 'Add pages below to feature in the main menu',
    type: 'array',
    of: [
      {
        type: 'object',
        title: 'Child page',
        fields: [
          {title: 'Menu text', name: 'text', type: 'string'},
          {
            title: 'Child pages',
            name: 'childpages',
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
              }
            ]
          }
        ]
      }
    ]
  }