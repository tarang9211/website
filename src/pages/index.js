import React from "react"
import { Helmet } from "react-helmet"
import data from "../data"
import TwitterIcon from "../assets/svgs/twitter.svg"
import GithubIcon from "../assets/svgs/github.svg"
import LinkedInIcon from "../assets/svgs/linkedin.svg"
import "../css/global.css"

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Tarang Hirani</title>
        <meta name="description" content="Tarang Hirani's website"/>
      </Helmet>
      <div className="container mx-auto">
        <section className="min-w-full flex justify-center">
          <div
            className="
          profile-bg
          bg-cover bg-no-repeat bg-center 
          border-solid border-1 border-gray-100 rounded-full
          shadow-2xl
          w-40 h-40"
          />
        </section>
        <section>
          <h4 className="font-sans text-center antialiased font-medium text-3xl text-gray-100 mb-0">
            Hi, I'm Tarang{" "}
            <span className="text-3xl" role="img" aria-label="emoji">
              🙋‍♂️
            </span>
          </h4>
          <h5 className="font-sans text-center antialiased font-medium text-xl text-gray-200 mt-4 mb-0">
            Full Stack Engineer
          </h5>
          <div className="flex justify-center mt-4">
            <div className="w-5 h-5 mr-4">
              <a
                aria-label="Twitter"
                href="https://twitter.com/tarang9211"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </div>
            <div className="w-5 h-5 mr-4">
              <a
                aria-label="Github"
                href="https://github.com/tarang9211"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="w-5 h-5">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/tarang-hirani-72a9b83a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </section>
        <section>
          <h4 className="font-sans antialiased font-medium text-xl text-gray-300">
            Projects
          </h4>
          <ul className="p-0 list-none">
            {data.map(d => {
              return (
                <li key={JSON.stringify(d)} className="mb-10">
                  <p className="font-sans antialiased text-base mb-1 font-medium text-gray-200">
                    {d.title}
                  </p>
                  <p className="font-sans antialiasted text-sm m-0 text-gray-500">
                    {d.subtitle}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </>
  )
}

export default Index
