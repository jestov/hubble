import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />

      <article className="px-6 md:px-0 py-48 max-w-7xl font-violet text-primary flex gap-10 flex-col">
        <header>
          <h3 className="text-xl text-gray-500 mb-4 font-violet uppercase">
            {frontMatter.date}
          </h3>  
          <h1 className="font-violet text-primary text-3xl md:text-5xl">
            {frontMatter.title}
          </h1>
        </header>
        <Image src={frontMatter.img} alt={frontMatter.title} width={800} height={400}  className='w-full'/>
        <main>
          <article className="w-full prose mx-auto !text-primary !font-violet">
            <MDXRemote {...source} components={components} className="font-violet text-primary" />
          </article>
        </main>
        <div className="grid md:grid-cols-2 lg:-mx-24 mt-12 gap-8">
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} legacyBehavior>
              <a className="overflow-hidden text-center md:text-right rounded-[24px] first backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition border border-gray-secondary border-opacity-10 flex flex-col">
                <Image src={prevPost.img} alt={prevPost.title} width={800} height={400}  className='w-full'/>
                <div className='p-8'>
                  <p className="uppercase text-gray-500 mb-4 text-base tracking-wider">
                    Previous
                  </p>
                  <h4 className="text-2xl lg:text-3xl text-gray-700 mb-6">
                    {prevPost.title}
                  </h4>
                  <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
                </div>
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} legacyBehavior> 
              <a className="overflow-hidden text-center md:text-left rounded-[24px] last backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition border border-gray-secondary border-opacity-10 flex flex-col">
              <Image src={nextPost.img} alt={nextPost.title} width={800} height={400}  className='w-full'/>
<div className='p-8'>
                  <p className="uppercase text-gray-500 mb-4 text-base tracking-wider">
                    Next
                  </p>
                  <h4 className="text-2xl lg:text-3xl text-gray-700 mb-6">
                    {nextPost.title}
                  </h4>
                  <ArrowIcon className="transform mx-auto md:ml-0 mt-auto" />
                </div>
              </a>
            </Link>
          )}
        </div>
      </article>

      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
