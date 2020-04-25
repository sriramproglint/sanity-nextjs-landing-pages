export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea44321d0093b98c52f0c0d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-58wn5wi1',
                  apiId: '8954a2b9-b251-4b5e-8a17-18066cdab3da'
                },
                {
                  buildHookId: '5ea44321b83dec2c7a0c446a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y2sj2g3u',
                  apiId: '9cdbd55f-fd48-4ad2-b84b-c3601d6dfd47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sriramproglint/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y2sj2g3u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
