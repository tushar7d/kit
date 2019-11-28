/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'ProtoKit',
  tagline: 'Production quality prototype in hours',
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
        {to: 'docs/Box', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
       
      ],
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
