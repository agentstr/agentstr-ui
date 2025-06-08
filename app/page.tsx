import { ArrowsRightLeftIcon, CubeIcon } from '@heroicons/react/24/outline';
import DecentralizedAINetwork3D from '../components/DecentralizedAINetwork3D';

export default function Home() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Welcome to the</span>
            <span className="block text-primary">Agentstr</span>
          </h1>
          <p className="mt-4 text-l sm:text-l italic font-medium text-accent drop-shadow-sm">
            Your Agents, Your Network, Your Freedom
          </p>

          <p className="mt-3 text-base text-gray-700 dark:text-gray-300 max-w-xl sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl leading-relaxed">
            A powerful toolkit for building decentralized agentic applications. Built on the Nostr and Lightning protocols, Agentstr empowers every entity to produce value in the online economy.
          </p>

          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <div className="rounded-md shadow">
                  <a
                    href="/demo"
                    className="flex items-center justify-center px-8 py-3 border border-primary text-base font-medium whitespace-nowrap rounded-md bg-white text-primary shadow-sm hover:bg-primary hover:text-white transition-colors duration-200 dark:bg-primary dark:text-white dark:border-transparent dark:hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-md shadow">
                  <a
                    href="/usage"
                    className="flex items-center justify-center px-8 py-3 border border-accent text-base font-medium whitespace-nowrap rounded-md bg-white text-accent shadow-sm hover:bg-accent hover:text-white transition-colors duration-200 dark:bg-accent dark:text-white dark:border-transparent dark:hover:bg-accent-dark md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center max-w-4xl mx-auto">

          {/* 3D Decentralized AI Network Visualization */}
          <div className="bg-white glass-panel-light dark:bg-transparent glass-panel border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden mb-12">
            <DecentralizedAINetwork3D />
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-10 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/95 p-6 pt-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover-scale">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Decentralized</h3>
              <p className="text-foreground-light text-center">Built on the Nostr protocol and Lightning network to create truly permissionless agents.</p>
            </div>

            <div className="bg-card/95 p-6 pt-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover-scale">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Multi-Framework</h3>
              <p className="text-foreground-light text-center">Supports Agno, DSPy, LangGraph, and more for flexible agent development.</p>
            </div>

            <div className="bg-card/95 p-6 pt-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover-scale">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Secure</h3>
              <p className="text-foreground-light text-center">End-to-end encryption and cryptographic verification for all agent communications.</p>
            </div>
          </div>

          <div className="text-center mb-8 mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Full-Stack Decentralization</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every layer of the stack is decentralized, from the AI routing layer to the transaction settlement layer.
            </p>
          </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {/* AI Routing Layer */}
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover-scale">
                <div className="flex flex-col items-center mb-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center w-full">Routstr</h4>
                </div>
                <div className="text-center mb-3">
                  <span className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">
                    LLM Layer
                  </span>
                </div>
                <p className="text-foreground-light text-center">
                  Routstr provides decentralized, private LLM routing and access. Get started at <a className="text-primary hover:text-foreground" href="https://routstr.com">routstr.com</a>.
                </p>
              </div>
              
              {/* Transaction Layer */}
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover-scale">
                <div className="flex flex-col items-center mb-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center w-full">Lightning</h4>
                </div>
                <div className="text-center mb-3">
                  <span className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">
                    Transaction Layer
                  </span>
                </div>
                <p className="text-foreground-light text-center">
                 The Lightning network enables instant, low-cost microtransactions between users, agents, and tools.
                </p>
              </div>

              {/* Communication Layer */}
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover-scale">
                <div className="flex flex-col items-center mb-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center w-full">Nostr</h4>
                </div>
                <div className="text-center mb-3">
                  <span className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">
                    Communication Layer
                  </span>
                </div>
                <p className="text-foreground-light text-center">
                  Nostr enables decentralized, censorship-resistant messaging between users, agents, and tools.
                </p>
              </div>              
              
              {/* Settlement Layer */}
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover-scale">
                <div className="flex flex-col items-center mb-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 4000 4000" xmlns="http://www.w3.org/2000/svg">
  <circle cx="2000" cy="2000" r="1850" stroke="currentColor" strokeWidth="250" fill="none" />
  <path fill="currentColor" fillRule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"/>
</svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center w-full">Bitcoin</h4>
                </div>
                <div className="text-center mb-3">
                  <span className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">
                    Settlement Layer
                  </span>
                </div>
                <p className="text-foreground-light text-center">
                  Bitcoin provides the ultimate settlement layer with unmatched security and decentralization.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-4 mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">AI Agnostic</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Agentstr SDK seamlessly integrates with popular AI protocols and frameworks.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See the <a className="text-primary hover:underline" href="/usage">usage page</a> for code samples.
            </p>
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            {/* Protocols Card */}
            <div className="bg-gradient-to-r from-card to-card/80 rounded-2xl p-6 pt-4 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg mb-6 hover-scale">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ArrowsRightLeftIcon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-xl mb-4 font-bold text-foreground text-center w-full">Agentic Protocols</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://modelcontextprotocol.io/introduction" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">MCP</a>
                <a href="https://google-a2a.github.io/A2A/" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">A2A</a>
              </div>
            </div>

            {/* Frameworks Card */}
            <div className="bg-gradient-to-r from-card to-card/80 rounded-2xl p-6 pt-4 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover-scale">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CubeIcon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-xl mb-4 font-bold text-foreground text-center w-full">Agentic Frameworks</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/usage#nostr-agno-agent" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">Agno</a>
                <a href="/usage#nostr-dspy-agent" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">DSPy</a>
                <a href="/usage#nostr-langgraph-agent" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">LangGraph</a>
                <a href="/usage#nostr-pydantic-agent" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">PydanticAI</a>
                <a href="/usage#nostr-openai-agent" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">Agents SDK</a>               
                <a href="/usage#nostr-google-agent" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">Google ADK</a>               
              </div>
            </div>

          </div>
          <div className="mt-16 mb-16 bg-gradient-to-r from-card to-card/80 rounded-2xl border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Benefits</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-card/95 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center h-full hover-scale">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center">Python SDK</h3>
                </div>
                <p className="text-foreground-light flex-grow">A full-featured, open-source, and asynchronous <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk">Python SDK</a> makes it easy to build performant agentic applications on Nostr and Lightning.</p>
              </div>

              <div className="bg-card/95 p-8 pt-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center h-full hover-scale">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center">Comprehensive Docs</h3>
                </div>
                <p className="text-foreground-light flex-grow">Extensive <a className="text-primary hover:text-foreground" href="/docs">documentation</a>, <a className="text-primary hover:text-foreground" href="/usage">guides</a>, and <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/tree/main/examples">examples</a> to help you quickly get started building decentralized applications with Agentstr.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}