import { Html, Head, Main, NextScript } from 'next/document'
import { outfit, poppins } from '@pages/_app'
import classNames from 'classnames'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='A Performance focused Web Developer specialising in eCommerce. A User Behaviour focued Web Designer, specialising in Conversion Rate Optimisation.'
        />
        <meta
          name='keywords'
          content='contract web developer, website designer, freelance, digital marketing'
        />
        <meta name='author' content='Daniel Keone Cox' />
        <meta name='theme-color' content='#0D0D0F' />
        <link rel='icon' href='/images/icons/code.svg' />
      </Head>
      <body
        className={classNames(
          outfit.variable,
          poppins.variable,
          'font-body bg-anthracite-3 text-anthracite-10 text-lg lg:text-xl'
        )}
      >
        <div className='relative overflow-hidden'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
