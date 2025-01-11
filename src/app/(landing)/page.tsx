import React from "react"
import { Check } from "lucide-react"

import Heading from "@/components/heading"
import ShinyButton from "@/components/shiny-button"
import MockDiscordUI from "@/components/mock-discord-ui"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import DiscordMessage from "@/components/discord-message"

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
              <ShinyButton href="/register" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
              Comience Gratis Hoy
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700"/>
        <div className="relative mx-auto">
          <MaxWidthWrapper>
            <div className="-m-2 rouded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage 
                    username="PingPanda"
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda"
                    title="🧑 Nuevo Usuario"
                    timestamp="2023-03-23"
                    badgeText="Registrate"
                    badgeColor="#43b581"
                    content={{
                      name: "Oduber Vasques",
                      email: "GZM0s@example.com",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
