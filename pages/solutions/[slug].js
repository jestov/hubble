import { getGlobalData } from '../../utils/global-data';
import {
  getNextSolutionBySlug,
  getSolutionBySlug,
  getPreviousSolutionBySlug,
  solutionFilePaths,
} from '../../utils/mdx-utils-solutions';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import CTA from '../../components/cta';
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

export default function SolutionPage({
  source,
  frontMatter,
  prevSolution,
  nextSolution,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />

        <header className='flex flex-col items-center w-full border border-t border-secondary border-opacity-10 gap-8 py-24'>


        <Image src={frontMatter.img} alt={frontMatter.title} width={800} height={400}  className='w-full h-24'/>
        
          <h1 className="font-violet text-primary text-4xl md:text-6xl dark:text-white">
            {frontMatter.title}
          </h1>
          <h3 className="text-2xl text-primary mb-4 font-violet">
            {frontMatter.description}
          </h3>  
        </header>

      <article className="px-6 md:px-0 py-24 max-w-7xl font-violet text-primary flex gap-10 flex-col">

        <main>
          <article className="prose text-primary">
            <MDXRemote {...source} components={components} />
          </article>
        </main>

      </article>

      <div className="grid md:grid-cols-2 lg:-mx-24 gap-8">
          {prevSolution && (
            <Link href={`/solutions/${prevSolution.slug}`} legacyBehavior>
              <a className="text-center md:text-right first flex flex-col">
                <div className='p-8'>
                  <p className="uppercase text-gray-500 mb-2 text-sm tracking-wider">
                    Previous Solution
                  </p>
                  <h4 className="text-lg text-primary mb-6 flex gap-4 items-center">
                  <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto h-8" /> {prevSolution.title}
                  </h4>

                </div>
              </a>
            </Link>
          )}
          {nextSolution && (
            <Link href={`/solutions/${nextSolution.slug}`} legacyBehavior> 
              <a className="text-center md:text-left last flex flex-col">
                <div className='p-8'>
                  <p className="uppercase text-gray-500 mb-2 text-sm tracking-wider">
                    Next Solution
                  </p>
                  <h4 className="text-lg text-primary mb-6 flex gap-4 items-center">
                    {nextSolution.title} <ArrowIcon className="transform mx-auto md:ml-0 mt-auto" />
                  </h4>

                </div>
              </a>
            </Link>
          )}
        </div>

        <CTA 
        titleElement={<span>Unlock your Company's<br />potential with us</span>} 
        buttonLabel="Free consultation" 
        buttonLink="https://calendly.com/doravaldez" 
      />


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
  const { mdxSource, data } = await getSolutionBySlug(params.slug);
  const prevSolution = getPreviousSolutionBySlug(params.slug);
  const nextSolution = getNextSolutionBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevSolution,
      nextSolution,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = solutionFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
