import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import AnimatedLink from '@components/AnimatedLink'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'

export default function Bio() {
  return (
    <>
      <section className='relative'>
        <Container size={Options.md}>
          <div className='bg-anthracite-4 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
            <h2 className='text-emerald-500 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
              Hello,
            </h2>
            <article className='relative'>
              <p className='sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20'>
                I’m Daniel, a mathematician from London offering services in
                <Em> Web Design </Em>
                and
                <Em> Development</Em>.
                <br />
                <br />
                I’ve been constantly programming ever since I began my maths
                degree at University of Bath, and, after delving into research
                papers on behavioural design while procrastinating my degree,
                I’ve also become fascinated by the
                <Em> science behind great UX/UI</Em>
                .
                <br />
                <br />
                These interests in tandem have abruptly steered my trajectory
                away from a career in finance, to a career
                <Em> designing and developing engaging web experiences</Em>
                - inspiring me to spend 3 years after my degree learning the web
                and all it’s intricacies.
                <br />
                <br />
                And I <Em>haven't looked back!</Em>
              </p>
            </article>

            <Separator className='my-10 lg:my-14' />

            <article className='relative'>
              <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
                Extra bits about me
              </h3>
              <p className='sm:pr-8 md:pr-12 lg:pr-16 xl:pr-20'>
                I love doing weekly, monthly and yearly challenges. Last year my
                challenge was no meat. This year it’s no chocolate. Next year
                it’s no deep fried food and no United Kingdom- both very bad for
                you.
              </p>
            </article>

            <Separator className='my-10 lg:my-14' />

            <article className='relative'>
              <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
                Design Skills
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                <div className=''>
                  <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-white mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                    Software
                  </h3>
                  <List
                    dashColor={Color.emerald}
                    className='text-anthracite-9 text-base lg:text-lg'
                    items={[
                      'Figma',
                      'Adobe Illustrator',
                      'Adobe After Effects',
                    ]}
                  />
                </div>
                <div className=''>
                  <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-white mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                    Expertise
                  </h3>
                  <List
                    dashColor={Color.emerald}
                    className='text-anthracite-9 text-base lg:text-lg'
                    items={['Bevavioural web design', 'Checkout funnels']}
                  />
                </div>
              </div>
            </article>

            <Separator className='my-10 lg:my-14' />

            <article className='relative'>
              <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
                Development Skills
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                <div className=''>
                  <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-white mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                    Languages
                  </h3>
                  <List
                    dashColor={Color.emerald}
                    className='text-anthracite-9 text-base lg:text-lg'
                    items={['Typescript / Javascript', 'HTML / CSS', 'Go']}
                  />
                </div>
                <div className=''>
                  <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-white mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                    Frameworks
                  </h3>
                  <List
                    dashColor={Color.emerald}
                    className='text-anthracite-9 text-base lg:text-lg'
                    items={['React', 'Next.js', 'Remix', 'Astro']}
                  />
                </div>
                <div className=''>
                  <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-white mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                    Deployment / CMS Solutions
                  </h3>
                  <List
                    dashColor={Color.emerald}
                    className='text-anthracite-9 text-base lg:text-lg'
                    items={[
                      'Vercel',
                      'Fly.io',
                      'Crystalise',
                      'Shopify',
                      'Prismic',
                    ]}
                  />
                </div>
                <div className=''>
                  <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-white mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                    Expertise
                  </h3>
                  <List
                    dashColor={Color.emerald}
                    className='text-anthracite-9 text-base lg:text-lg'
                    items={[
                      'Super fast eCommerce storefronts',
                      'Web animations (GSAP, Lottie, Framer Motion)',
                      'Edge deployment',
                    ]}
                  />
                </div>
              </div>
            </article>
          </div>
          <div className='flex justify-end pt-16 md:pt-20 bg-anthracite-1'>
            <AnimatedLink
              href='/products'
              linkClassName='font-heading font-extrabold text-xl md:text-2xl lg:text-3xl flex gap-1 items-center'
            >
              View products
              <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
            </AnimatedLink>
          </div>
        </Container>
      </section>
    </>
  )
}
