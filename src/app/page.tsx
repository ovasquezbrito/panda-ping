import React from "react"
import MaxWidthWrapper from "./components/max-width-wrapper"
import Heading from "./components/heading"
import { Check } from "lucide-react"
import ShinyButton from "./components/shiny-button"

const Page = () => {
  return (
    <>
      <section className="relative py-24 s:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Información sobre SaaS en tiempo real</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Entregado a tu discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            PingPanda es la forma más sencilla de monitorear su SaaS. Obtener instantáneo
            notificaciones para{" "}
              <span className="font-semibold text-gray-700">
              ventas, nuevos usuarios o cualquier otro evento 
              </span> {" "}
              enviado directamente a tu Discord.
            </p>
            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Monitorear las ventas de tu SaaS",
                "Nuevos usuarios",
                "Notificaciones de eventos",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-1.5 items-center text-left" 
                >
                  <Check className="size-5 shrink-0 text-brand-700"/>
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton>
                Comenzar
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
