const testmonials = [
    {
        name:"Sarah Chen",
        role:"Senior Developer",
        content:"This AI-powered development platform has revolutionized how we write code.The intelligent suggestions save us houirs every day.",
        image:"https://images.pexels.com/photos/34414652/pexels-photo-34414652.jpeg"
    },
    {
        name:"Emily Watson",
        role:"CTO",
        image:"https://images.pexels.com/photos/34414595/pexels-photo-34414595.jpeg",
        content:"The automated testing and debugging features are game-changers. "
    },
    {
        name:"Marcus Rodrig",
        role:"Tech Lead",
        image:"https://images.pexels.com/photos/34414592/pexels-photo-34414592.jpeg",
        content:"Our development velocity increassed by 300% since adopting this platform.",

    },
]


export default function Testimonials() {
return <section
id="testimonials"
className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-18">
        {/* left*/}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                What Developers are saying avbout us
                </h2>
                <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
                    Everything you need to build,test,and deploy applications with AI-powered development tools.

                </p>
        </div>
        {/*test*/}
        <div className="lg:w-1/2 w-full ">
        <div className="space-y-6 sm:space-y-8">
            {testmonials.map((testmonial,key) => (
                <div key={key} 
                className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">
                            <div 
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold
                            bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text
                            text-transparent"
                            >
                                "
                                </div>
                        </div>
                        <div className="flex-grow">
                            <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testmonial.content}</p>
                            <div className="flex items-center space-x-2 sm:space-x-3" >
                                <img src={testmonial.image} alt={testmonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
                                <div>
                                    <h4 className="font-semibold text-white text-sm sm:text-base">{testmonial.name}</h4>
                                    <p className="text-xs sm:text-sm text-gray-400">{testmonial.role}</p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            ))}

            </div>
        </div>
        </div>
        </div>
        </section>
}
