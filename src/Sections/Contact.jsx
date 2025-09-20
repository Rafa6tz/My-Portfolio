import LinkedInSVG from "../Images/LinkedInSVG"
import GithubSVG from "../Images/GithubSVG"
import WhatsAppSVG from "../Images/WhatsAppSVG"

const Contact = () => {
  return (
    <section className='min-h-screen md:pl-20 pt-32 pl-14 min-w-full overflow-hidden flex flex-col gap-6 items-center'>
        <h3 className='text-3xl text-center font-bold cabin-sketch'>Contato</h3>
        <p className="coming-soon text-center px-8 text-xl">Interessado em juntos ou tem um projeto em mente: Entre em contato comigo nos links abaixo!</p>
        <div className="w-1/2 flex flex-wrap justify-center gap-8">

        <div className="flex items-center border-2 border-dashed border-stone-900 bg-stone-400 rounded-2xl p-2 px-8">
            <a href="https://github.com/Rafa6tz/" className="cabin-sketch font-bold flex items-center gap-2"><GithubSVG/> GitHub</a>
        </div>
        <div className="flex items-center border-2 border-dashed border-green-900 bg-green-400 rounded-2xl p-2 px-4">
            <a href="https://github.com/Rafa6tz/" className="cabin-sketch font-bold flex items-center gap-2"><WhatsAppSVG/> What's App</a>
        </div>
        <div className="flex items-center border-2 border-dashed border-blue-900 bg-blue-400 rounded-2xl p-2 px-4">
            <a href="https://github.com/Rafa6tz/" className="cabin-sketch font-bold flex items-center"><LinkedInSVG/> LinkedIn</a>
        </div>
        </div>
    </section>
  )
}

export default Contact