// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pass',
  tagline: 'Next generation CSS preprocessor.',
  url: 'https://pass-lang.vercel.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ksenginew',
  projectName: 'pass',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ksenginew/pass/edit/main/site/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ksenginew/pass/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pass',
        logo: {
          alt: 'Pass logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ksenginew/pass',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/pass',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/pass',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ksenginew',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ksenginew/pass',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kavindu Santhusa. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['js-templates', 'css'],
      },
    }),
};

module.exports = config;
