import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../assets/FooterImg.png';
import Tiktok from '../assets/zospace-assets/logos/tiktokLogo.svg';
import Facebook from '../assets/zospace-assets/logos/FacebookLogo.svg';
import Instagram from '../assets/zospace-assets/logos/InstagramLogo.svg';
import FrontImage from  '../assets/zospace-assets/images/servicio-de-manejo-de-redes-sociales-arequipa.png'
import  NavBar  from '../components/NavBar';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
      <NavBar />
        <section className='py-8 px-4 lg:px-10 bg-gray-800'>
          
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
                      Quienes Somos?
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Portafolio
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Servicios
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Contacto
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
                    {' '}
                    ¡ Cotizar Ahora !
                  </a>
                </div>
                <p className='mt-6 mb-4 text-lg text-center'>
                  <span>2021 © Zospace. All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section className='pb-20 bg-gray-800'>
          <nav className='relative'></nav>
          <div className='relative container px-4 pt-12 md:pt-20 mx-auto'>
            <div className='flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14'>
              <div className='w-full lg:w-1/2 px-4 mb-16 lg:mb-0'>
                <h2 className='max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading'>
                  Haga crecer su marca más rápido que Nunca.
                </h2>
                <p className='mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100'>
                  La agencia de publicidad que le dara un cremiento exponencial
                  a su marca.
                </p>
                <a
                  className='inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                  href='#'
                >
                  Sobre nosotros
                </a>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <img
                  className='w-full'
                  src={FrontImage}
                  alt=''
                />
              </div>
            </div>
            <div className='max-w-4xl mx-auto -mb-12 flex flex-wrap items-center justify-center'>
              <div className='w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12'>
                <img
                  className='h-8 mx-auto'
                  src='images/LogoLaskin-svg-1707951639056.webp'
                  alt=''
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12'>
                <img
                  className='h-8 mx-auto'
                  src='images/outputsvg-svg-1707951795328.webp'
                  alt=''
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12'>
                <img
                  className='h-8 mx-auto w-20 h-20'
                  src='images/iVI29I6u-400x400-removebg-preview-png-1707952071085.webp'
                  alt=''
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12'>
                <img
                  className='h-8 mx-auto'
                  src='images/LogoEgali.svg'
                  alt=''
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12'>
                <img
                  className='h-8 mx-auto'
                  src='zospace-assets/logos/brands/tesla.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto'>
              <div className='flex items-center mb-16 pr-6'>
                <a
                  className='ml-10 mr-auto text-2xl text-gray-800 font-bold'
                  href='#'
                >
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
            <div className='mb-10 max-w-xl mx-auto mb-24 text-center'>
              <span className='text-lg font-bold text-blue-500'>
                How it works
              </span>
              <h2 className='mt-12 text-5xl lg:text-6xl text-white font-bold font-heading'>
                Construyendo sin problemas.
              </h2>
            </div>
            <div className='relative px-8 lg:pr-0 lg:pl-12 2xl:pl-24 mb-14 lg:mb-40 bg-gray-600 rounded-xl overflow-hidden'>
              <div className='w-full lg:w-1/3 pt-12 lg:py-12'>
                <h3 className='mb-4 text-xl font-bold text-white'>
                  ¿Como trabajamos?
                </h3>
                <p className='text-xl text-gray-300'>
                  Conoce nuestras estrategias para lanzar tu marca / producto o
                  servicio al maravilloso mundo digital.
                </p>
              </div>
              <img
                className='lg:absolute top-0 right-0 bottom-0 h-full w-full lg:w-1/3 object-cover'
                src='zospace-assets/images/illustration-men-phone.svg'
                alt=''
              />
            </div>
            <div className='relative flex flex-wrap justify-center -mx-10 mb-20'>
              <img
                className='hidden lg:block absolute inset-y-0 -mr-80 -mt-16'
                src='zospace-assets/lines/dots-gray.svg'
                alt=''
              />
              <div className='w-full lg:w-1/3 px-10 mb-20 lg:mb-0'>
                <div className='relative flex'>
                  <img
                    className='hidden lg:block absolute top-0 right-0 -mr-20 -mt-16'
                    src='zospace-assets/lines/dots-gray.svg'
                    alt=''
                  />
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      1
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading text-white'>
                      Envianos un e-mail.
                    </h3>
                    <p className='text-lg text-gray-200'>
                      Es la manera más facil y rapido para trabajar juntos,
                      explicandonos de manera sencilla cuales son tus objetivos.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-10 mb-20 lg:mb-0'>
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      2
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading text-white text-center'>
                      ¡Sigue el avance de tu proyecto!
                    </h3>
                    <p className='text-lg text-gray-200'>
                      Por medio de herramientas tecnologicas te crearemos un
                      usurio para que puedas ver las actualizaciones de tu
                      proyecto antes de darlas a conoer al mundo.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-10'>
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      3
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading text-white'>
                      Realiza el pago de forma segura y facil.
                    </h3>
                    <p className='text-lg text-gray-200'>
                      Nuestras pasarelas de pago son desarrolladas por empresas
                      de confianza que tu conoces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <a
                className='inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                href='#'
              >
                Contacto directo
              </a>
            </div>
          </div>
        </section>
        <section className='relative py-20 2xl:py-40 bg-gray-800 overflow-hidden'>
          <img
            className='hidden lg:block absolute top-0 right-0 h-128 w-128 -mt-52 -mr-52'
            src='zospace-assets/lines/circle.svg'
            alt=''
          />
          <img
            className='hidden lg:block absolute bottom-0 left-0 h-128 w-128 -mb-52'
            src='zospace-assets/lines/full-circle.svg'
            alt=''
          />
          <img
            className='block absolute bottom-0 left-0 h-24 md:h-32 lg:h-72 lg:ml-24 -mb-8'
            src='zospace-assets/images/five-stars.svg'
            alt=''
          />
          <img
            className='block absolute bottom-0 left-0 h-128 w-128 -mb-96 -ml-24'
            src='zospace-assets/lines/circle.svg'
            alt=''
          />
          <div className='container px-3 mx-auto'>
            <div className='max-w-3xl mx-auto text-center'>
              <span className='text-lg text-blue-400 font-bold'>
                ¿Que esperas?
              </span>
              <h2 className='my-10 text-5xl lg:text-6xl font-bold font-heading text-white'>
                Multiplica tus ganancias exponencialmente.
              </h2>
              <div className='max-w-md mx-auto'>
                <p className='mb-20 text-lg text-gray-200'>
                  ¿Que esperas para darle comienzo a tus proyectos?
                </p>
                <a
                  className='inline-block mb-4 sm:mb-0 sm:mr-4 py-5 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                  href='#'
                >
                  Contactanos
                </a>
                <a
                  className='inline-block py-5 px-12 text-white font-bold border border-gray-300 hover:border-gray-200 rounded-full'
                  href='#'
                >
                  Portafolio.
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 bg-gray-800'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-12 text-center text-xl font-bold font-heading text-white'>
              Las marcas que han confiado en nosotros
            </h2>
            <div className='flex flex-wrap -m-4'>
              <div className='w-full md:w-1/2 lg:w-1/5 p-4'>
                <div className='flex w-full h-32 items-center justify-center border-2 border-gray-600 rounded-lg'>
                  <img
                    className='h-16'
                    src='zospace-assets/logos/spotify-box.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/5 p-4'>
                <div className='flex w-full h-32 items-center justify-center border-2 border-gray-600 rounded-lg'>
                  <img
                    className='h-6'
                    src='zospace-assets/logos/we-box.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/5 p-4'>
                <div className='flex w-full h-32 items-center justify-center border-2 border-gray-600 rounded-lg'>
                  <img
                    className='h-6'
                    src='zospace-assets/logos/slack-box.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/5 p-4'>
                <div className='flex w-full h-32 items-center justify-center border-2 border-gray-600 rounded-lg'>
                  <img
                    className='h-12'
                    src='zospace-assets/logos/miro-box.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/5 p-4'>
                <div className='flex w-full h-32 items-center justify-center border-2 border-gray-600 rounded-lg'>
                  <img
                    className='h-6'
                    src='zospace-assets/logos/dropbox-box.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-20 pb-24 2xl:py-40 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <div className='mb-16 md:mb-24 text-center'>
              <h2 className='mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading'>
                Nuestros planes base
              </h2>
              <p className='text-lg text-gray-200'>
                Si nuestros planes no estan dentro de tus espectativas puedes
                contactarte con nosotros directamente para una solución
                personalizada.
              </p>
            </div>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap items-center -mx-3'>
                <div className='w-full lg:w-1/3 px-3 mb-8 lg:mb-0'>
                  <div className='px-12 py-16 bg-gray-500 rounded-3xl'>
                    <div className='pb-8 mb-14 border-b border-gray-400'>
                      <div className='flex justify-between items-center px-3'>
                        <h3 className='text-4xl text-white font-bold font-heading'>
                          Emprendedor
                        </h3>
                      </div>
                    </div>
                    <ul className='text-lg text-white mb-16'>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Desarrollo de marca.</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Diseño de logotipo.</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>1 Landing Page.</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>1 Correo Corporativo.</span>
                      </li>

                    </ul>
                    <div className='text-center'>
                      <a
                        className='inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white'
                        href='#'
                      >
                        $1.160.000COP
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-3 mb-8 lg:mb-0'>
                  <div className='px-12 py-16 bg-green-700 rounded-3xl'>
                    <div className='pb-8 mb-14 border-b border-blueGray-300'>
                      <div className='flex justify-between items-center px-3'>
                        <h3 className='text-4xl text-white font-bold font-heading'>
                          Gran Empresa
                        </h3>
                      </div>
                    </div>
                    <ul className='text-lg text-white mb-16'>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Desarrollo de Marca / Branding</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Creación de la pagina web </span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Mantenimiento</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>5 - Actulización</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>5 Correos Corporativos.</span>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <a
                        className='inline-block px-10 py-4 border border-blueGray-300 hover:border-blueGray-100 rounded-full font-bold text-white'
                        href='#'
                      >
                        $2.850.000COP
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-3'>
                  <div className='px-12 py-16 bg-gray-500 rounded-3xl'>
                    <div className='pb-8 mb-14 border-b border-gray-400'>
                      <div className='flex justify-between items-center px-3'>
                        <h3 className='text-4xl text-white font-bold font-heading'>
                          Gran Empresa
                        </h3>
                      </div>
                    </div>
                    <ul className='text-lg text-white mb-16'>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Desarrollo de Marca / Branding</span>
                      </li>
                      <li className='flex items-center mb-8'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Creación de la pagina web.</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='mr-6'>
                          <svg
                            width={20}
                            height={16}
                            viewBox='0 0 20 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                        <span>Manejo de Redes Sociales - Marketing</span>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <a
                        className='inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white'
                        href='#'
                      >
                        $4.849.900 COP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-20 2xl:pt-40 bg-gray-800'>
          <figure className='relative'>
            <span className='absolute -top--1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2"'>
              © 2005 - 2024 By Fennix369
            </span>
            <div className=' flex mx-10 justify-end'>
            <img
              className='w-10'
              src={Facebook}
              alt='Facebook Logo'
            />

            <img
              className='w-10'
              src={Tiktok}
              alt='Tiktok Logo'
            />

            <img
              className='w-10'
              src={Instagram}
              alt='Instagram Logo'
            />
            </div>
           
            <img src={Footer} alt='Imagen de triangulos coloridos que forman el Footer' />
          </figure>
        </section>
      </>
    </React.Fragment>
  );
}

