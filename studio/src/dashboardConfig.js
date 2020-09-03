export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f50862d1b7c839512b74d81',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oefidqan',
                  apiId: 'fb096c5d-a812-4d83-9b24-1ea86d9d9f57'
                },
                {
                  buildHookId: '5f50862dabaf029f7a32b443',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v4foxf6h',
                  apiId: '9d0e4dca-7c19-4c29-8648-71b76999cfb0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajit555db/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v4foxf6h.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
