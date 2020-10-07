export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f7dfbdf65e838125ecec2db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7qj53hc9',
                  apiId: 'ca08e0de-ee06-4bac-a7ca-0a308fcc4c14'
                },
                {
                  buildHookId: '5f7dfbdf83a1bb12b5a22df5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jtmx1s79',
                  apiId: 'c4c10465-42f9-4f12-bfab-f61e3705b455'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bubulemaster/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jtmx1s79.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
