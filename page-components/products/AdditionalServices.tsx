import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'
import Separator from '@components/Separator'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import classNames from 'classnames'

const services = [
  {
    heading: 'User logins',
    subHeading: 'log in with email/password or Google, Facebook etc…',
  },
  {
    heading: 'Email Marketing Service Integration',
    subHeading: 'with Mailchimp ',
  },
  {
    heading: 'Android / IOS app development',
    subHeading: 'using React Native',
  },
  {
    heading: 'Automated tax service integration',
    subHeading:
      'with Taxjar, an accountant will be able to advise you on these services',
  },
  {
    heading: 'Analytics integration',
    subHeading: 'with HotJar and/or Google Analytics',
  },
  {
    heading: 'Custom email domiain setup',
    subHeading: 'attach your company name to your email address',
  },
]

const AdditionalServices = () => {
  return (
    <>
      <section className='pt-16 md:pt-20 relative bg-anthracite-3'>
        <Container size={Options.md}>
          <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
            <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-200 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
              Additional Services
            </h2>
            <ul className=''>
              {services.map((service, index) => {
                const isLast = index === services.length - 1 ? true : false
                return (
                  <li className={classNames(isLast ? '' : 'pb-4')} key={index}>
                    <FadeInFromLeft className='text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
                      <span className='text-yellow-300'>-</span>
                      <div className='ml-2'>
                        <h3 className=''>{service.heading}</h3>
                        <p className='font-body font-normal text-anthracite-9 text-base lg:text-lg'>
                          {service.subHeading}
                        </p>
                      </div>
                    </FadeInFromLeft>
                  </li>
                )
              })}
            </ul>

            <Separator className='my-10 lg:my-14' />

            <p className='mt-4 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Of course, every website requires{' '}
              <Em>different features and considerations,</Em> so take my
              price/timeframe approximations above with a{' '}
              <Em>grain of salt.</Em>
              <br />
              <br />
              The only way to know for sure is to{' '}
              <Em>contact me for a quote!</Em>
            </p>
          </div>

          <div className='flex justify-end pt-16 md:pt-20 bg-anthracite-3'>
            <AnimatedLink
              href='/projects'
              linkClassName='font-heading font-extrabold text-xl md:text-2xl lg:text-3xl text-anthracite-12 flex gap-1 items-center'
            >
              View projects
              <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
            </AnimatedLink>
          </div>
        </Container>
      </section>
    </>
  )
}
export default AdditionalServices
