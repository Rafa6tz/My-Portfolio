import Nav from "./Components/Nav"
import About from "./Sections/About"
import Projects from "./Sections/Projects"


function App() {

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white relative">
      <Nav/>
       <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      <About/>
      <Projects/>
      <div className="fixed left-16 top-0 bottom-0 w-px bg-red-400 opacity-60 pointer-events-none" />
      <div className="fixed left-8 top-0 bottom-0 flex flex-col justify-start pt-20 pointer-events-none h-250 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full mb-8 shadow-inner"
            style={{
              background: 'radial-gradient(circle at center, #f3f4f6 30%, white 70%)'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
