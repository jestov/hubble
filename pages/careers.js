import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {



  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />

      <section className="flex flex-col gap-8 my-40 max-w-7xl mx-auto min-w-[70vw]">
        <div className='flex flex-col gap-4 items-start'>
          <h3 className="font-violet text-primary text-base tracking-widest uppercase">
           Our vacancies
          </h3>
          <h2 className="text-5xl font-violet text-primary relative">
            <span className='z-10 relative'>Careers</span>
            <span class="absolute bottom-1.5 z-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-300"></span>
          </h2>
          <p className="text-base lg:text-lg opacity-90 font-violet text-primary max-w-xl">
            If you love to serve others, learn new things and dare to do things differently, we want to meet you. Be part of our Talent team and learn about the opportunities we have for you.
          </p>
        </div>
        <iframe src="https://hubble.join-our.team/" title="Vacantes disponibles" className='h-[800px] rounded-lg shadow-lg min-w-3xl max-w-full'></iframe>
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
  const globalData = getGlobalData();

  return { props: { globalData }};
}
