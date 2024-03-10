import Link from 'next/link';
import Image from   'next/image';
import { getPosts } from '../utils/mdx-utils';
import { useEffect } from 'react';


import Layout, { GradientBackground } from '../components/Layout';
import Tab from '../components/Tab';
import ArrowIcon from '../components/ArrowIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import TiktokIcon from '../components/icons/TiktokIcon';
import YoutubeIcon from '../components/icons/YoutubeIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import AmazonIcon from '../components/icons/AmazonIcon';
import SpotifyIcon from '../components/icons/SpotifyIcon';
import Button from '../components/Button';
import ButtonBook from '../components/ButtonBook';
import Marquee from '../components/marquee';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {

  const CalendlyWidget = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div>
        <div className='calendly-inline-widget w-full min-h-[80vh] h-[70vh]' data-url="https://calendly.com/doravaldez?primary_color=ff4a00"></div>
      </div>
    );
  };



  const tabs = [
    {
      key: 'hr',
      title: 'Hubble HR Department',
      content: (
        <div>
          <p>Innovative HR solutions...</p>
          {/* Insert any complex HTML or React components */}
          <img src="/path-to-image.jpg" alt="Descriptive alt text" />
          <div>More content here...</div>
        </div>
      ),
    },
    {
      key: 'culture',
      title: <img src="/path-to-logo.jpg" alt="Company Culture" />,
      content: (
        <div>
          <p>Deep insights into organizational culture...</p>
          {/* More complex components */}
        </div>
      ),
    },
    {
      key: 'ai',
      title: 'AI Talent Hunting',
      content: (
        <div>
          <p>Advanced AI to identify top talent...</p>
          <div>
            <ul>
              <li>Point one...</li>
              <li>Point two...</li>
              {/* More items */}
            </ul>
          </div>
        </div>
      ),
    },
  ];
  



  const tabs_programs = [
    {
      key: 'benefits',
      title: <img src="/img/hubble_benefits.png" className='h-8' alt="Company Culture" />,
      content: (
        <div className="flex flex-col md:flex-row items-center py-12 gap-14">
          <div className="md:w-1/2 relative">
            <Image
              src="/img/bg_benefits.jpg" 
              alt="Hubble Benefits"
              width={500}
              height={600}
              className="w-full rounded-br-[45px] h-[700px] object-cover"
            />
            <Image src="/img/noise.svg" width={100} height={100} className="absolute -bottom-8 -left-8"/> 
          </div>
          <div className="md:w-1/2 flex flex-col gap-8">
            <h2 className="text-base uppercase tracking-wide font-violet text-primary relative lg:pr-24">
              Unleashing the Potential of Employees with Exclusive Benefits Program!
            </h2>
            <div className='flex gap-4 items-end'>
              <Image width={220} height={50} src="/img/hubble_benefits.png" className='h-12 object-contain' alt="Company Culture" />
              <div className="px-3 h-8 text-xs tracking-wide text-primary uppercase flex items-center bg-secondary bg-opacity-10 rounded-full">
                Coming Soon
              </div>
            </div>
            <p className="mb-4 text-base text-primary leading-7 lg:pr-16">
              Hubble Benefits is a cutting-edge digital rewards platform designed to appreciate and motivate your company's team. It bridges the gap between businesses and service providers, turning your employees into potential clients for a wide range of providers. Whether you're a start-up or an established corporation, our platform allows you to send rewards, incentives, and digital gifts, fostering a strong connection between your company and your employees.
              <br /> <br />
              Hubble Benefits is a powerful HR tool that enhances employee retention, boosts job satisfaction, and nurtures a positive and productive work environment.
            </p>
       
            <div className="flex gap-4">
              <Button href="https://forms.gle/JdEHuMwrRnkvjRSC7" className="bg-primary text-white">
                Join to the waitlist
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'partners',
      title: <img src="/img/hubble_partners.png" className='h-8' alt="Company Culture" />,
      content: (
        <div className="flex flex-col md:flex-row items-center py-12 gap-14">
          <div className="md:w-1/2 relative h-[700px]">
            <Image
              src="/img/bg_partners.jpg" 
              alt="Hubble Partners"
              layout='fill'
              className="w-full rounded-br-[45px] object-cover"
            />
            <Image src="/img/noise.svg" width={100} height={100} className="absolute -bottom-8 -left-8 z-20"/> 
          </div>
          <div className="md:w-1/2 flex flex-col gap-8">
            <h2 className="text-base uppercase tracking-wide font-violet text-primary relative lg:pr-24">
              Elevate HR Excellence with Hubble Partners: Where Vision Meets Impact
            </h2>
            <div className='flex gap-4 items-end'>
              <Image width={220} height={50} src="/img/hubble_partners.png" className='h-12 object-contain' alt="Company Culture" />
              <div className="px-3 h-8 text-xs tracking-wide text-primary uppercase flex items-center bg-secondary bg-opacity-10 rounded-full">
                Coming Soon
              </div>
            </div>
            <p className="mb-4 text-base text-primary leading-7 lg:pr-16">
            Hubble Partners is an exclusive network designed for experienced consultants who are passionate about driving exponential growth in companies through strategic human resources practices. We believe that HR isn't just an operational function - it's a transformative tool that reshapes the way we work.
            <br /> <br />
            As a Hubble Partner, you'll join a community of like-minded professionals committed to accelerating change in the workplace. You'll expand your portfolio with our cutting-edge HR services and have the opportunity to share your expertise on a larger scale, amplifying your impact and driving the evolution of HR forward.
            <br /> <br />
            Our partners also enjoy a host of benefits tailored to support their growth and success. These range from exclusive access to our resources and networks to opportunities for professional development and collaboration.
            </p>
       
            <div className="flex gap-4">
              <Button href="https://forms.gle/JdEHuMwrRnkvjRSC7" className="bg-primary text-white">
                Join to the waitlist
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'university',
      title: <img src="/img/hubble_university.png" className='h-8' alt="Company Culture" />,
      content: (
        <div className="flex flex-col md:flex-row items-center py-12 gap-14">
          <div className="md:w-1/2 relative">
            <Image
              src="/img/bg_university.jpg" // Asegúrate de tener la imagen en tu carpeta public/
              alt="Hubble Benefits"
              width={500}
              height={600}
              className="w-full rounded-br-[45px] h-[700px] object-cover"
            />
            <Image src="/img/noise.svg" width={100} height={100} className="absolute -bottom-8 -left-8"/> 
          </div>
          <div className="md:w-1/2 flex flex-col gap-8">
            <h2 className="text-base uppercase tracking-wide font-violet text-primary relative lg:pr-24">
              Unleashing the Potential of Employees with Exclusive Benefits Program!"
            </h2>
            <div className='flex gap-4 items-end'>
              <Image width={220} height={50} src="/img/hubble_university.png" className='h-12 object-contain' alt="Company Culture" />
              <div className="px-3 h-8 text-xs tracking-wide text-primary uppercase flex items-center bg-secondary bg-opacity-10 rounded-full">
                Coming Soon
              </div>
            </div>
            <p className="mb-4 text-base text-primary leading-8 lg:pr-16">
              Hubble University is a dynamic learning platform designed for HR professionals seeking to enhance their skills and impact in the workplace. Offering a diverse array of HR and related courses, Hubble University empowers learners to stay at the forefront of industry trends and become strategic influencers in shaping the future of work. In addition to top-notch courses, Hubble University fosters a lively, global community, enabling the exchange of ideas, collaborative problem-solving, and networking opportunities.
              <br /> <br />
              By subscribing to the platform for a reasonable monthly fee, members gain access to world-class content, expert-led training, and the chance to be part of a transformative HR movement. Join Hubble University today and be a part of reshaping HR, one course at a time.
            </p>
       
            <div className="flex gap-4">
              <Button href="https://forms.gle/JdEHuMwrRnkvjRSC7" className="bg-primary text-white">
                Join to the waitlist
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];
  


  const timelineEvents = [
    {
      title: "Discover and Define",
      description: "We begin by understanding your business, its culture, and specific needs. We analyze your current HR practices and identify areas of improvement or necessary changes.",
      date: "STEP 1",
    },
    {
      title: "Strategize and Customize",
      description: "Based on our discovery phase, we develop a strategic HR plan tailored to your business. This includes choosing and customizing the right tools, processes, and HR models that best suit your company.",
      date: "STEP 2",
    },
    {
      title: "Implement and Integrate",
      description: "We roll out the tailored HR strategy, incorporating innovative technologies, software, and AI solutions. We ensure seamless integration with your business operations.",
      date: "STEP 3",
    },
    {
      title: "Monitor, Enhance and Operate",
      description: "Post-implementation, we continuously monitor the performance and effectiveness of the HR strategy. We collect feedback, analyze results, and make necessary adjustments for ongoing optimization of your HR daily operations.",
      date: "STEP 4",
    },
    {
      title: "Organization Impact",
    },
  ];
  

  const cardsData = [
    {
      src: "/img/rayados.png",
      alt: "Logo Rayados de Monterrey",
      title: "Rayados de Monterrey Football Club",
      text: "We had the pleasure of working with Hubble to enhance our workplace culture and optimize our human resources management at Rayados de Monterrey Football Club. Their expertise and commitment to excellence truly transformed our organization.",
    },
    {
      src: "/img/tec.png",
      alt: "Logo Tecnológico de Monterrey",
      title: "Tecnológico de Monterrey",
      text: "Hubble played a pivotal role in transforming our workplace culture and revolutionizing our human resources management practices at Tecnológico de Monterrey. Their dedication and expertise helped us achieve significant improvements throughout our organization.",
    },
  
  ];

  const images = [
    "/img/solarfuel.png",
    "/img/divinata.png",
    "/img/polaris.png",
    "/img/magno.png",
    "/img/skingroup.png",
    "/img/nasa_tech.png",
    "/img/superia.png",
    "/img/grit.png",
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/lade.rh", icon: <InstagramIcon color="#31304F"/> },
    { href: "https://www.facebook.com/LadeRH1", icon: <FacebookIcon color="#31304F"/> },
    { href: "https://www.tiktok.com/@doravaldez.rh", icon: <TiktokIcon /> },
    { href: "https://www.youtube.com/@DoraValdezRH", icon: <YoutubeIcon /> },
    { href: "https://www.linkedin.com/in/doravaldez/", icon: <LinkedinIcon color="#31304F"/> },
    { href: "https://www.amazon.com.mx/Haz-que-suceda-Lecciones-Capital/dp/B09KF4FCQK/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=25D6LCXI06WNV&keywords=dora+valdez&qid=1700358723&s=books&sprefix=dora+valde%2Cstripbooks%2C126&sr=1-1", icon: <AmazonIcon /> },
    { href: "https://open.spotify.com/show/2B2OXSopNuJCdldZHV2FH9?si=45c1862aa6f041b4", icon: <SpotifyIcon /> }
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => (
      <Link key={index} href={link.href} target="_blank">
        {link.icon}
      </Link>
    ));
  };


  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="w-full min-h-screen bg-[url('/img/hubble.jpg')] bg-cover flex flex-col justify-center items-center gap-10 text-white font-clash px-32">
        <h1 className="text-5xl lg:text-7xl text-center font-clash font-medium">
        Your HR Partners:
        <br />
        <span className='font-semibold text-green'>All-in-One HR Expertise.</span>
        </h1>
        <p className="text-center text-lg lg:text-2xl opacity-90 font-violet max-w-3xl">
        At Hubble, we redefine work by creating innovative HR solutions customized for your unique needs. Our goal is to integrate with both current and future talent, changing work for visionary businesses.
        </p>
        <div className="flex gap-4">
          <Button href="#" className="bg-gradient-to-r from-green to-secondary hover:from-secondary hover:to-green !text-lg text-white">Free consultation</Button>
          <Button href="#solutions" className="bg-transparent border border-gray-300 !text-lg text-white hover:border-white">Know solutions</Button>
        </div>
      </main>


      <section className="flex flex-col gap-16 w-full min-h-[50vh] flex flex-col py-32 px-[15px] lg:px-48">
        <div className="container mx-auto p-4">
          
        </div>
      </section>



      <section className="flex flex-col items-center justify-center gap-8 w-full min-h-[50vh] flex flex-col justify-center py-14 bg-[url('/img/bg-alt.jpg')] bg-cover text-white py-24">
        <h2 className="text-5xl font-violet  text-center">
          Book your free consultation now
        </h2>
        <p className="text-center text-lg lg:text-2xl opacity-90 font-violet max-w-3xl">
        Have HR difficulties? Contact us to explore potential solutions.
        </p>
        <div className='w-full'>
          <CalendlyWidget />
        </div>
      </section>



      <section className="flex flex-col gap-16 w-full min-h-[50vh] flex flex-col py-32 px-[15px] lg:px-48">
        <div className='flex flex-col gap-4 items-start'>
          <h3 className="font-violet text-primary text-base tracking-widest uppercase">
            HOW WE WORK
          </h3>
          <h2 className="text-5xl font-violet text-primary relative">
            <span className='z-10 relative'>Our workflow</span>
            <span class="absolute bottom-1.5 z-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-300"></span>
          </h2>
          <p className="text-base lg:text-lg opacity-90 font-violet text-primary max-w-3xl">
            We add value by working hand-in-hand with our clients towards defined objectives.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              {/* Render a different structure for the last item */}
              {index === timelineEvents.length - 1 ? (
                <div className="flex justify-center items-center w-36 h-36 bg-secondary -mt-6 -ml-8 lg:-ml-24 rounded-full text-white text-center uppercase">
                  <div className="text-base leading-none -tracking-2">{event.title}</div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-secondary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-blue-100 after:border-2 after:box-content after:border-secondary after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="font-violet tracking-widest sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-gradient-to-r from-green to-emerald-400 rounded-full">{event.date}</time>
                    <div className="text-2xl text-primary">{event.title}</div>
                  </div>
                  <div className="text-gray-500 text-base">{event.description}</div>
                </>
              )}
            </div>
          ))}
        </div>

      </section>




 


      <div className="container mx-auto px-14 py-24 flex flex-col gap-10 items-center justify-center">
        <div className='flex flex-col gap-4 items-start w-full'>
          <h3 className="font-violet text-primary text-base tracking-widest uppercase">
            CASES
          </h3>
          <h2 className="text-5xl font-violet text-primary relative">
            <span className='z-10 relative'>Our clients <br />
guarantee us</span>
            <span class="absolute bottom-1.5 z-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-300"></span>
          </h2>
        </div>
        <div class="flex justify-center gap-8 px-4 py-8">
      

          <div className="flex justify-center gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className={`w-full bg-white py-36 px-14 bg-white bg-opacity-10 border border-gray-300`}>
              <div className="flex flex-col p-4 gap-8 items-start">
                <Image className="mb-3  object-contain max-h-20" src={card.src} alt={card.alt} width={220} height={140}/>
                <h5 className={`mb-1 text-2xl font-violet font-medium text-gray-900`}>{card.title}</h5>
                <p className={`text-lg text-gray-500`}>{`"${card.text}"`}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-12 items-center w-full">
            {images.map((src, index) => (
                <Image
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  width={200} // Establece el ancho deseado
                  height={150} // Establece la altura deseada
                  className="max-w-28 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
            ))}
          </div>
      </div>




      <div className="container mx-auto px-14 py-24 flex flex-col gap-18 items-center justify-center">
        <div className='flex flex-col gap-4 items-center'>
          <h3 className="font-violet text-primary text-base tracking-widest uppercase">
            Human capital disrupter | speaker | author | AI hr
          </h3>
          <h2 className="text-5xl font-violet text-primary relative">
            <span className='z-10 relative'>Our founder</span> <span className="text-secondary font-belgro tracking-tight">DORA VALDEZ</span>
          </h2>
          <div className="flex gap-6 items-center">
            {renderSocialLinks()}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center py-12 gap-14">
          <div className="md:w-1/2 relative">
            <Image
              src="/img/founder.jpg" // Asegúrate de tener la imagen en tu carpeta public/
              alt="Dora Valdez"
              width={500}
              height={600}
              className="w-full rounded-br-[45px] h-[850px] object-cover"
            />
            <Image src="/img/noise.svg" width={100} height={100} className="absolute -bottom-8 -left-8"/> 
             <ButtonBook href="/booking" className="absolute bottom-8 right-8">
                Book with Dora
              </ButtonBook>
          </div>
          <div className="md:w-1/2 flex flex-col gap-8">

            <p className="mb-4 text-base text-primary leading-8 lg:pr-16">
            Dora is an accomplished specialist in Human Capital and Business Management with over 20 years of experience. As the founder of multiple companies, including Hubble, she brings a deep understanding of the value of Human Capital to organizations. With a diverse background in industries such as IT, petrochemicals, food and beverages, telecommunications, and real estate, she has a wealth of knowledge.
            <br /> <br />
            She is a respected speaker and author, delivering conferences on talent management, Human Capital innovation, organizational culture, and business leadership. Her recently published book, "Make It Happen! 41 Lessons in Human Capital," showcases her expertise.
            <br /> <br />
            As the Chapter Chair of the Women's President Organization, she is dedicated to empowering women in leadership roles. In her free time, she enjoys reading and participating in marathons in cities like Berlin, Chicago, and New York.
            </p>
       
            <div className="flex gap-4">
              <Button href="https://www.youtube.com/watch?v=Tl5-qt8HioY" className="bg-primary text-white">
                Watch <Image src="/img/ted.svg" width={25} height={30} className='h-6'/> Talk
              </Button>
              <Button href="https://disrupthr.co/vimeo-video/cambiar-la-forma-en-que-el-mundo-trabaja-dora-valdez-disrupthr-talks/" className="bg-white text-primary">
                Watch Disrupt Talk
              </Button>

            </div>
          </div>
        </div>
      </div>


      <section className="flex flex-col gap-8 my-40 max-w-7xl mx-auto">
        <div className='flex flex-col gap-4 items-start'>
          <h3 className="font-violet text-primary text-base tracking-widest uppercase">
           The most recent posts
          </h3>
          <div className='flex justify-between w-full'>
            <h2 className="text-5xl font-violet text-primary relative">
                <span className='z-10 relative'>Blog</span>
                <span class="absolute bottom-1.5 z-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-300"></span>
            </h2>
            <Button href="/blog" className="text-white bg-primary">
                View all posts
            </Button>
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-8">
            {posts.slice(0,3).map((post) => (
              <li
                key={post.filePath}
                className="overflow-hidden backdrop-blur-lg flex flex-col justify-between bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10"
              >
                <Link
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`} legacyBehavior
                >
                    <Image src={post.data.img} alt={post.data.title} width={400} height={200} className='w-full'/>
                </Link>
                <Link
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`} legacyBehavior
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

        <section className="flex flex-col gap-16 w-full bg-white rounded-lg m-10 flex flex-col items-center py-32 px-[15px] lg:px-48">
          <h2 className="text-5xl font-violet text-primary relative">
            <span className='z-10 relative'>Our programs</span>
            <span class="absolute bottom-1.5 z-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-300"></span>
          </h2>
          <div className="container mx-auto p-4 flex flex-col ">
            <Tab tabs={tabs_programs} />
          </div>
        </section>


        <div className='my-10 w-full'>
        <Marquee
        words={['WeImprove', 'WeHubble', 'WeInnovate']}
        separator1="/img/dot_green.svg"
        separator2="/img/dot_blue.svg"
      />

        </div>

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
