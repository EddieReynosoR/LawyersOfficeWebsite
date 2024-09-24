import { SERVICES } from "@/data/services";
import * as React from "react";

export const NavBarMobile = () => {
  
  const [show, setShow] = React.useState<boolean>(false);

  const handleShow = (show: boolean) => {
    setShow(show);
  }

  return (
      <>     
          <nav className="bg-white border-gray-200 sticky top-0 z-10 w-full hidden max-[768px]:block">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                      <span className="self-center text-2xl whitespace-nowrap  font-times text-primary">Romero's & Asociados</span>
                  </a>
                  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-whit items-center">
                          <li>
                          <a href="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-times text-[1.3em]" aria-current="page">Inicio</a>
                          </li>
                          <li>
                              <div id="dropdownNavbarLink">
                                <button data-dropdown-toggle="dropdownNavbar" onClick={() => handleShow(!show)} className="flex items-center justify-between w-full py-2 px-3 font-times text-[1.3em] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                                  Servicios
                                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                  </svg>
                                </button>
                                <div id="dropdownNavbar" className="z-10 font-normal bg-white divide-y divide-gray-100 absolute rounded-lg shadow w-44">
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                      {
                                        SERVICES.map((service) => (
                                          <li key={React.useId()}>
                                            <a href={`/servicio/${service.id}`}className="block px-4 py-2 hover:bg-gray-100">{service.title}</a>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                </div>
                              </div>
                          </li>
                          <li>
                          <a href="/sobre-nosotros/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 font-times text-[1.3em]">Sobre nosotros</a>
                          </li>
                          <li>
                          <a href="/contacto/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-times text-[1.3em]">Contáctanos</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </>
  );
}