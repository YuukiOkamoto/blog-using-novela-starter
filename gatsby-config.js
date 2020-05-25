module.exports = {
  siteMetadata: {
    title: `筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
    name: `筋肉ﾁｮｯﾄﾃﾞｷﾙ`,
    siteUrl: `https://blog-using-novela-theme.netlify.app`,
    description: `筋肉はちょっとできる、ボディービルダーなエンジニアブログ`,
    hero: {
      heading: `ようこそ！Gatsbyで技術ブログを作ってみました！ぜひご覧ください`,
      maxWidth: 829,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/it_fitness_jp`,
      },
      {
        name: `github`,
        url: `https://github.com/YuukiOkamoto`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
