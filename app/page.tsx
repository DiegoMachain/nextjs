import Image from "next/image";
import * as React from "react";

function Home_2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}



export default function Home() {
  return (
    <div className="flex z-10 flex-col w-full max-md:max-w-full">
      <div className="flex flex-col justify-center px-16 py-5 w-full text-xl font-bold tracking-normal text-center text-black whitespace-nowrap bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mr-12 ml-12 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
          
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="/Calaido_Top.svg"
              className="shrink-0 max-w-full aspect-[4.55] w-[106px]"
            />

            <div className="flex gap-5 justify-between self-start mt-1.5">
              <div>spaces</div>
              <div>pages</div>
              <div>team</div>
            </div>
          </div>
          <div className="my-auto">contact</div>
        </div>
      </div>

      
      
      <div className="mt-5 w-full max-md:mt-10 max-md:max-w-full">
        
        <div className="flex gap-[-10 px] max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:max-w-full">

            
              <div className="flex flex-col pl-20 max-md:pl-3 max-md:max-w-full">
                <div className="flex justify-center items-end self-end pt-60 pr-6 pb-20 pl-13 max-w-full text-7xl italic font-light text-right text-black bg-blue-200 rounded-full aspect-square w-[356px] h-[356px]max-md:pt-10 max-md:pl-5 max-md:text-4xl">
                </div>
                <div className="flex overflow-hidden relative z-10 flex-col items-end pt-20 pr-3.5 pb-3.5 pl-16 mt-[-200px] max-w-full text-base font-bold tracking-normal text-justify text-white whitespace-nowrap aspect-[0.77] w-[356px] max-md:pl-5 max-md:mt-0">
                  <img
                    loading="lazy"
                    src="/eye.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  // mt is the position of the text
                  <div className="relative justify-center p-2 mt-40 rounded-2xl backdrop-blur-[2px] bg-zinc-400 bg-opacity-30 max-md:mt-10">
                    {" "}
                    Experience every artwork
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-12 mt-[340px] w-full bg-orange-700 rounded-full aspect-square max-md:px-5 max-md:mt-10"/>
            </div>
          </div>

          <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-1 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-52 text-black max-md:mt-10 max-md:max-w-full">
                      <div className="self-start text-7xl italic font-light text-left max-md:text-4xl">
                      “
                      </div>
                      <div className="text-3xl italic tracking-tight leading-10 mt-[-35px] max-md:max-w-full">
                        We created the first online art platform that is
                        engaging, for everyone to experience art
                      </div>
                      <div className="self-end text-7xl italic font-light text-right max-md:text-4xl">
                        ”
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col items-end pt-20 pb-2.5 pl-6 text-base mt-[40px] font-bold tracking-normal text-justify text-white whitespace-nowrap aspect-[0.71] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="/connect_artists.png"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="relative justify-center p-2 mt-10 rounded-2xl backdrop-blur-[1px] bg-zinc-400 bg-opacity-20 max-md:mt-30">
                        Connect with artists
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-end mt-12 max-w-full w-[1073px] max-md:mt-10 max-md:mr-2.5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-center text-base font-bold tracking-normal text-justify whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                      <div className="flex overflow-hidden relative flex-col items-start self-stretch pt-2 pr-16 pb-20 pl-2.5 w-full text-white min-h-[304px] max-md:pr-5 max-md:max-w-full">
                        <img
                          loading="lazy"
                          src="/tour.png"
                          className="object-cover absolute inset-0 size-full"
                        />
                        <div className="relative justify-center p-2 mb-32 rounded-2xl backdrop-blur-[2px] bg-zinc-400 bg-opacity-30 max-md:mb-10">
                          Take real tours
                        </div>
                      </div>
                      <div className="mt-20 text-neutral-400 max-md:mt-10">
                        Learn more
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cda21258224cef7d23bd967ee3230c5e02800f39d989160f3cb84d3128341b6?"
                        className="mt-4 w-5 aspect-[2.86] fill-neutral-400"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cda21258224cef7d23bd967ee3230c5e02800f39d989160f3cb84d3128341b6?"
                        className="w-5 aspect-[2.86] fill-neutral-400"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                    <div className="flex justify-center items-center px-12 mt-24 w-full bg-red-400 rounded-full aspect-square max-md:px-5 max-md:mt-10">
                      <img
                        loading="lazy"
                        src="/Vector_Calaido.svg"
                        className="mt-[-15px]  aspect-[3.23] fill-white w-[290px] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
