import { Spotlight } from "./Spotlight"
import { SparklesCore } from "../ui/sparkles";
function HeroScreen(){
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col top-20 items-center relative overflow-hidden mx-auto py-10 md:py-10  '>
<Spotlight  className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>

           <div className="p-4 relative z-10 w-full text-center">
            
           <h1  className="mt-20 md:mt-0 text-6xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Your Lab (One stop for Medicals ) </h1>
            <h2 className="m-10 font-5xl text-base md:text-lg text-neutral-300 max-w-xl mx-auto">Welcome to your labs Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugit quasi cupiditate commodi nobis enim dignissimos sit laboriosam et dolores.</h2>

           </div>
        </div>
    )
}
export default HeroScreen