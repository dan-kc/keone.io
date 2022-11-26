import Container, { Options } from '@components/Container'
import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'
import ProgressCircle from '@components/ProgressCircle'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import ProgressBar from '@components/ProgressBar'

const WhyMeSection = () => {
  return (
    <section className='my-20 lg:my-40'>
      <Container size={Options.md}>
        <div className='mx-auto max-w-7xl'>
          <FadeInFromLeft className='pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
              That's why you should work with me
            </p>
          </FadeInFromLeft>

          <div className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p className='font-heading text-emerald-500 leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-6xl lg:text-8xl text-white'>
              I'm performance obsessed
            </p>
          </div>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight md:leading-tight lg:leading-tight '>
              Lighthouse scores:
            </h3>
          </FadeInFromLeft>

          <div className='flex gap-3 justify-between mt-5 md:mt-10'>
            <ProgressCircle percentage={97} caption='Performance' />
            <ProgressCircle
              percentage={100}
              caption='Accessibility'
              delay={0.2}
            />
            <ProgressCircle
              percentage={100}
              caption='Best Practices'
              delay={0.4}
            />
            <ProgressCircle percentage={91} caption='SEO' delay={0.6} />
          </div>

          <FadeInFromLeft className='relative inline-block mt-8 lg:mt-9'>
            <AnimatedLink
              href='https://developer.chrome.com/docs/lighthouse/overview/'
              linkClassName='font-semibold'
              newTab
            >
              Google Lighthouse
            </AnimatedLink>{' '}
            is a tool for measuring the <Em delay={0.1}>quality</Em> of web
            pages, and I think they like <Em delay={0.1}>keone.io</Em>.
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <h3 className='text-white font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-tight lg:leading-tight'>
              Core Web Vitals:
            </h3>
          </FadeInFromLeft>

          <div className='flex flex-col mt-5 md:mt-10'>
            <ProgressBar
              percentage={85}
              title='Largest Contentful Paint (LCP)'
              value={1.4}
              suffix='s'
            />
            <ProgressBar
              percentage={90}
              title='First Input Delay (FIP)'
              value={17}
              suffix='ms'
            />
            <ProgressBar
              percentage={95}
              title='Cumulative Layout Shift (CLS)'
              value={0}
            />
          </div>

          <FadeInFromLeft className='mt-8 lg:mt-9 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)] inline-block relative'>
            <AnimatedLink href='https://web.dev/vitals/' newTab>
              Core Web Vitals
            </AnimatedLink>{' '}
            are official <Em>Google ranking factors</Em>, but rest assured{' '}
            <Em>you don't have to worry </Em>
            about any of that when working with me.
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p>
              I use the <Em>fastest </Em>
              web frameworks available and I'm always searching for{' '}
              <Em>bleeding edge solutions </Em>
              to <Em>improve performance</Em>.
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p>
              Many web development agencies, even some of the biggest in the
              world, still use <Em> slow </Em> and<Em> dated </Em> web
              frameworks because they're 'proven', despite only being 'proven' 5
              years ago and <Em> sluggish </Em>today.
            </p>
          </FadeInFromLeft>

          <div className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p className='relative inline-block font-heading font-extrabold text-7xl md:text-8xl lg:text-9xl text-violet-500 leading-tight md:leading-tight lg:leading-tight'>
              I'm faster.
            </p>
          </div>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p>
              Work with me and you'll get a<Em> lightning fast website</Em> and
              a <Em>huge edge over your competitors</Em>.
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p>
              Did I mention that I'm <Em>drastically cheaper</Em> than
              agencies too?
            </p>
          </FadeInFromLeft>

          <div className='flex justify-end pt-20 md:pt-40 '>
            <AnimatedLink
              href='/products'
              linkClassName='font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl flex gap-1 items-center'
            >
              View products
              <ArrowRightIcon className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
            </AnimatedLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default WhyMeSection
