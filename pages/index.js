import Button from "./components/Button";
import TechStack from "./components/TechStack";

export default function Home(bg, border, src, border) {
  return (
    <>
      <section class="bg-black text-white h-screen flex flex-col justify-center items-center">
        <div class="relative overflow-hidden">
          <h1 class="pb-2 tracking-wide text-5xl text-white font-bold">
            Bryan.
          </h1>
          <p class="translate-x-0 bg-white transition-all absolute bottom-0 w-4/12 h-1.5"></p>
        </div>
        <p class="text-white/40 mt-10 w-6/12 md:w-3/12 text-center">
          Interested in
          <span class="font-bold transition-all delay-300 text-white/60">
            Front ends
          </span>
        </p>
      </section>
      <section class="p-4 flex items-center h-screen bg-white text-black">
        <div class="w-full md:w-10/12 lg:w-8/12 mx-auto">
          <h1 class="text-3xl text-black font-bold">My links</h1>
          <p class="font-light mt-1.5">
            Check my <span class="font-normal">socials</span>
          </p>

          <div class="space-y-2 py-4">
            <div class="w-7/12">
              <Button
                url="https://instagram.com/bryansdreamm"
                title="Follow my "
                span="Instagram →"
              />
            </div>
            <div class="w-5/12">
              <Button
                url="https://t.me/bryansdreamm"
                title="my "
                span="Telegram →"
              />
            </div>
            <div class="w-3/12">
              <Button
                url="https://github.com/bryansdream"
                title="or "
                span="Github →"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-10 trasition-all bg-black px-4">
        <div class="w-full md:w-10/12 lg:w-8/12 mx-auto">
          <h1 class="text-3xl text-white font-bold">Techstack</h1>
          <div class="transition-all grid mt-6 grid-cols-12 gap-4">
            <TechStack
              tech="Next Js"
              style={{
                text: "text-white",
                bg: "bg-black",
                src: "",
                border: "border-white",
              }}
            />
            <TechStack 
            tech= "React Js"
            style ={{
              text: "text-white",
              bg: "bg-[#222222]",
              src:"",
              border: "border-[#171717]"
            }}
            />
            <TechStack
              tech="Chakra UI"
              style={{
                text: "text-white",
                bg: "bg-[#63CACA]",
                src: "",
                border: "border-[#4FD1C6]",
              }}
            />
            <TechStack 
          tech= "Tailwind CSS"
          style= {{
            text: "text-white",
            bg: "bg-[#1D4161]",
            src: "",
            border: "border-blue-400"
          }}
            />
          </div>
        </div>
      </section>
      <section class="p-4 flex items-center h-screen bg-white text-black">
        <div class="w-full md:w-10/12 lg:w-8/12 mx-auto">
          <h1 class="text-3xl text-black font-bold">My projects</h1>
          <p class="font-light mt-1.5">My personal projects</p>
        </div>
      </section>
    </>
  );
}
