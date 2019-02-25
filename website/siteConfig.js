/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Kimiyoshi Usami',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/usamilab.png',
    infoLink: 'http://www.usamilab.ise.shibaura-it.ac.jp/',
    pinned: true,
  },
];

const siteConfig = {
  title: '高度情報演習2A FPGA開発チュートリアル', // Title for your website.
  tagline: '担当: 宇佐美 公良',
  url: 'https://yossy3459.github.io', // Your website URL
  baseUrl: '/koudo2a_fpga_tutorial_wip/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'koudo2a_fpga_tutorial',
  organizationName: 'yossy3459',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'intro-01', label: 'Basic'},
    {doc: 'adv-01', label: 'Advanced'},
    {page: 'help', label: 'Help'},
    {href: "http://syllabus.sic.shibaura-it.ac.jp/syllabus/2018/ko1/105270.html?y=2018&g=L01", label: "Syllabus" },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/usamilab.png',
  footerIcon: 'img/usamilab.png',
  favicon: 'img/usamilab.png',

  /* Colors for website */
  colors: {
    primaryColor: '#070d59',
    secondaryColor: '#1f3c88',
    // third: 5893D4, fourth: CEDDEF, accent(pink): FF5E8B, accent(green): 5EFF8B
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} UsamiLab`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  // ogImage: 'img/docusaurus.png',
  // twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  docsSideNavCollapsible: true,
};

module.exports = siteConfig;
