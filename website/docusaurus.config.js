/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'ProtoKit',
  tagline: 'Prototyping for everyone',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Expedia', // Usually your GitHub org/user name.
  projectName: 'cosmos', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ProtoKit',
      logo: {
        alt: 'ProtoKit Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
       
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      
      copyright: `Copyright © ${new Date().getFullYear()} Expedia Group. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
         
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
