import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function QuienesSomos() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='py-8 px-4 lg:px-10 bg-gray-800'>
        <nav className='relative flex justify-between items-center'>
            <a className='text-2xl text-white font-bold' href='#'>
              <img
                className=' w-15'
                src={Logo}
                alt=''
                width='100'
              />
            </a>
            <div className='lg:hidden'>
              <button className='p-2 navbar-burger'>
                <svg
                  className='w-10 h-10'
                  width={7}
                  height={7}
                  viewBox='0 0 39 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width={39} height={2} rx={1} fill='#C4C4C4' />
                  <rect
                    x={19}
                    y={11}
                    width={20}
                    height={2}
                    rx={1}
                    fill='#C4C4C4'
                  />
                </svg>
              </button>
            </div>
            <div className='hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
              <ul className='flex items-center text-white space-x-10'>
                <li>
                  <a className='text-white font-bold text-lg' href='/quienessomos'>
                    Quienes Somos?
                  </a>
                </li>
                <span>
                  <svg
                    width={5}
                    height={5}
                    viewBox='0 0 5 5'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='2.5' cy='2.5' r='2.5' fill='#726B6B' />
                  </svg>
                </span>
                <li>
                  <a className='text-white font-bold text-lg' href='/portafolio'>
                    Portafolio
                  </a>
                </li>
                <span>
                  <svg
                    width={5}
                    height={5}
                    viewBox='0 0 5 5'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='2.5' cy='2.5' r='2.5' fill='#726B6B' />
                  </svg>
                </span>
                <li>
                  <a className='text-white font-bold text-lg' href='/servicios'>
                    Servicios
                  </a>
                </li>
                <span>
                  <svg
                    width={5}
                    height={5}
                    viewBox='0 0 5 5'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='2.5' cy='2.5' r='2.5' fill='#726B6B' />
                  </svg>
                </span>
                <li>
                  <a className='text-white font-bold text-lg' href='/contacto'>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className='hidden lg:block'>
              <a
                className='inline-block px-12 py-4 text-white font-bold border rounded-full clasecualquiera'
                href='#'
              >
                {' '}
                ¡ Cotizar Ahora !
              </a>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto'>
              <div className='flex items-center mb-16 pr-6'>
                <a className='ml-10 text-2xl text-gray-800 font-bold' href='#'>
                  <img
                    className='h-7'
                    src='zospace-assets/logos/zospace-dark-logo.svg'
                    alt=''
                    width='auto'
                  />
                </a>
              </div>
              <div>
                <ul>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Product
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Story
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Features
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto px-10'>
                <div className='pt-6'>
                  <a
                    className='block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full'
                    href='#'
                  >
                    Sign in
                  </a>
                  <a
                    className='block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                    href='#'
                  >
                    Sign up
                  </a>
                </div>
                <p className='mt-6 mb-4 text-lg text-center'>
                  <span>2021 © Zospace. All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section className='py-20 2xl:py-40 bg-gray-800 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <img
              className='mb-24 w-full h-96 object-cover'
              src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
              alt=''
            />
            <div className='max-w-2xl mx-auto text-center'>
              <span className='text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600'>
                ¿Quienes Somos?
              </span>
              <h2 className='mt-7 mb-14 text-6xl 2xl:text-7xl text-white font-bold font-heading'>
                Conoce Nuestra Historia.
              </h2>
              <p className='max-w-xl mx-auto mb-14 text-xl text-gray-200'>
                Las pequeñas oportunidades son el comienzo de grandes compañias.
              </p>
              <div className='inline-flex pt-14 mb-14 items-center border-t border-gray-500'>
                <img
                  className='mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full'
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                  alt=''
                />
                <div className='text-left'>
                  <h4 className='mb-1 text-2xl font-bold text-gray-50'>
                    Juan C. Restrepo
                  </h4>
                  <p className='text-white'>CEO - Fundador</p>
                </div>
              </div>
              <div className='max-w-xl mx-auto'>
                <p className='mb-6 text-left text-xl text-gray-200'>
                  Una empresa conformada por un equipo de profesionales con mas
                  de 20 años de experiencia en campo de la publicidad, apoyando
                  a las empresas del eje cafetero, Nuestra pasión por la
                  creatividad y la innovación nos ha permitido destacarnos en el
                  mercado y ofrecer soluciones efectivas para nuestros clientes.
                  Estamos comprometidos en brindar un servicio de calidad,
                  enfocado en alcanzar los objetivos y metas de cada proyecto de
                  manera exitosa,
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

