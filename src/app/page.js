export default function Home() {
  return (
    <div className="">
      <div className="mt-10 text-center">
        <h1 class="text-3xl font-bold marquee">
          TikTok Live Stream PK Injector
        </h1>
      </div>

      <div className="px-10">
        <div className=" mt-7 border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
          <article className="w-full h-full">
            <figure className="w-full h-1/2 border-black border-b-2">
              <img
                src="https://api.animemoe.us/discord/refresh/?url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F858938620425404426%2F1259409241555337276%2Fanimemoeus-waifu.jpg"
                alt="thumbnail"
                className="w-full h-full object-cover rounded-md"
              />
            </figure>
          </article>
        </div>
      </div>

      <div className="px-10 mt-10">
        <div className="flex flex-col space-y-6">
          <input
            className="border-black border-2 p-2.5 focus:outline-none focus:shadow-[3px_3px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[3px_3px_0px_rgba(0,0,0,1)] shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            placeholder="https://www.tiktok.com/@imchildish731"
          />
        </div>
      </div>

      <div className="px-10 mt-7">
        <button className="font-bold w-full h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Submit
        </button>
      </div>
    </div>
  );
}
