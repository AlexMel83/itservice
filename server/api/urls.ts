export default defineSitemapEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL;
  const posts = await Promise.all([
    {
      _path: baseURL,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      _path: `${baseURL}/about`,
      moifedAt: new Date(),
    },
  ]);
  return posts.map((post) => ({ loc: post._path, lastmod: new Date() }));
});
