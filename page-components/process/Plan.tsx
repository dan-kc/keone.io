import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import FadeInFromLeft from '@components/FadeInFromLeft'
import Separator from '@components/Separator'
//             I know how businesses work and how frustrating it can be when all you want is a quote but instead you’re enduring a drawn out email back and forth that feels like it’s going nowhere- made even worse when the quoted terms in the end don’t even work for you!
// So, in order to save you from that, I’ve prepared a brief template showing you everything that I need to know in order to give you an instant quote on timescales and pricing.
// In fact, if you’re sufficiently detailed, I’m confident I can give you that quote you’re looking for in my very first response!

const Plan = () => {
  return (
    <section className='relative'>
      <Container size={Options.md}>
          <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
          <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-300 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Plan
          </h2>
          <article className='relative'>
            <p className='font-display text-base lg:text-lg text-cyan-400'>
              Step 1/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Send me an email
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Here's an{' '}
              <AnimatedLink mail underlineClassName='bg-white'>
                <Em>email template</Em>
              </AnimatedLink>{' '}
              which outlines the information that I’ll need in order to
              accurately gauge the scope of your project.
              <br />
              <br />
              If the email is detailed enough, I'll be able to give you a quote
              in my <Em>very next email back!</Em> Along with suggestions for
              some possible features worth implementing.
              <br />
              <br />
              Get in touch-{' '}
              <Em>I can't wait to learn all about your business!</Em>
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg text-cyan-400'>
              Step 2/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              We discuss and agree terms
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Yep... That’s really all it takes to get started!
            </p>
          </article>

          <FadeInFromLeft className='text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-cyan-500'>-</span> Design Deposit
          </FadeInFromLeft>
        </div>
      </Container>
    </section>
  )
}

export default Plan
