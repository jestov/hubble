import Link from 'next/link';
import { getPosts } from '../../utils/mdx-utils';
import Image from 'next/image';


import Layout, { GradientBackground } from '../../components/Layout';
import ArrowIcon from '../../components/ArrowIcon';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../../components/SEO';

export default function Index({ posts, globalData }) {



  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />

      <section className="flex flex-col gap-8 my-20 lg:my-40 max-w-7xl mx-auto px-[30px]">
        <div className='flex flex-col gap-4 items-start'>
          <h3 className="font-violet text-primary text-base tracking-widest uppercase">
           The most recent posts
          </h3>
          <h2 className="text-4xl lg:text-5xl font-violet text-primary relative">
            <span className='z-10 relative'>Blog</span>
            <span className="absolute bottom-1.5 z-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-300"></span>
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <li
                key={post.filePath}
                className="overflow-hidden backdrop-blur-lg flex flex-col justify-between bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-secondary border-opacity-10 dark:border-white border-opacity-10 dark:border-opacity-10"
              >
                <Link
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/blog/[slug]`} legacyBehavior
                >
                    <Image src={post.data.img} alt={post.data.title} width={400} height={200} className='w-full'/>
                </Link>
                <Link
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/blog/[slug]`} legacyBehavior
                >
                  <a className="py-6 lg:py-10 px-6 lg:px-10 block focus:outline-none focus:ring-4 text-primary flex flex-col gap-6 font-violet">
                    {post.data.date && (
                      <p className="uppercase opacity-60">
                        {post.data.date}
                      </p>
                    )}
                    <h2 className="text-xl md:text-2xl font-violet">{post.data.title}</h2>
                    {post.data.description && (
                      <p className="text-base opacity-60">
                        {post.data.description}
                      </p>
                    )}
                    <div className='flex items-center gap-2 text-base'>Read More <ArrowIcon /></div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
