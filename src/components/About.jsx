import React from "react";

function About() {
  return (
    <div>
      <section
        id="about"
        className="w-full bg-[#1f1f1f] text-gray-200 py-20 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              I’m a frontend developer who enjoys creating clean, modern, and
              responsive web interfaces. I love building smooth user
              experiences, writing organized code, and turning ideas into real
              digital products.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I work with HTML, CSS, JavaScript, React, and TailwindCSS — and
              I’m always learning new tools to level up my craft. If it involves
              UI and a clean user flow, I’m locked in.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Build responsive & modern websites</li>
                <li>• Create clean UI components</li>
                <li>• Convert designs from Figma to code</li>
                <li>• Add animations & micro-interactions</li>
                <li>• Integrate APIs into frontend apps</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                HTML
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                CSS
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                JavaScript
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                React
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                TailwindCSS
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                Git
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
            <div className="space-y-2 mb-10">
              <p className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                React Patterns
              </p>
              <p className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                Framer Motion
              </p>
              <p className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                Clean Code
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Tools I Use</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                VS Code
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                GitHub
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                Figma
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                Chrome DevTools
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                Vercel
              </span>
              <span className="bg-[#2a2a2a] py-3 rounded-lg text-center">
                Netlify
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
