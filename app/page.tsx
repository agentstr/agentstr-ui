import { ArrowsRightLeftIcon, CubeIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Welcome to the</span>
            <span className="block text-primary">Agentstr SDK</span>
          </h1>

          <p className="mt-3 text-base text-gray-300 max-w-xl sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl leading-relaxed">
            A powerful toolkit for building decentralized agentic applications. Built on the Nostr and Lightning protocols, Agentstr empowers every entity (AI and Human) to produce and consume value in the online economy.
          </p>

          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <div className="rounded-md shadow">
                  <a
                    href="/demo"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium whitespace-nowrap rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                  >
                     Watch Demo
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-md shadow">
                  <a
                    href="/usage"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium whitespace-nowrap rounded-md text-white bg-accent hover:bg-accent-dark md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-10 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/95 p-6 pt-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Decentralized</h3>
              <p className="text-foreground-light text-center">Built on the Nostr protocol and Lightning network to create truly permissionless agents.</p>
            </div>

            <div className="bg-card/95 p-6 pt-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Multi-Framework</h3>
              <p className="text-foreground-light text-center">Supports Agno, DSPy, LangGraph, and more for flexible agent development.</p>
            </div>

            <div className="bg-card/95 p-6 pt-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Secure</h3>
              <p className="text-foreground-light text-center">End-to-end encryption and cryptographic verification for all agent communications.</p>
            </div>
          </div>

          <div className="text-center mb-8 mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">Full-Stack Decentralization</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every layer of the stack is decentralized, from the AI routing layer to the transaction settlement layer.
            </p>
          </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {/* AI Routing Layer */}
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
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
                  Routstr provides decentralized, private LLM routing and access. Get started at <a className="text-primary hover:text-white" href="https://routstr.com">routstr.com</a>.
                </p>
              </div>
              
              {/* Transaction Layer */}
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
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
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
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
              <div className="bg-card/50 p-6 pt-4 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col items-center mb-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <h2 className="text-3xl font-bold text-white mb-4">AI Agnostic</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Agentstr SDK seamlessly integrates with popular AI protocols and frameworks. See the <a className="text-primary hover:underline" href="/usage">usage</a> page for code samples.

            </p>
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            {/* Protocols Card */}
            <div className="bg-gradient-to-r from-card to-card/80 rounded-2xl p-8 pt-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ArrowsRightLeftIcon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl mb-4 font-bold text-foreground text-center w-full">Agentic Protocols</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://modelcontextprotocol.io/introduction" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">MCP</a>
                <a href="https://google-a2a.github.io/A2A/" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">A2A</a>
              </div>
            </div>

            {/* Frameworks Card */}
            <div className="bg-gradient-to-r from-card to-card/80 rounded-2xl p-8 pt-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CubeIcon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl mb-4 font-bold text-foreground text-center w-full">Agentic Frameworks</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://docs.agno.com/introduction" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">Agno</a>
                <a href="https://dspy.ai/" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">DSPy</a>
                <a href="https://www.langchain.com/langgraph" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">LangGraph</a>
                <a href="https://ai.pydantic.dev/" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">PydanticAI</a>
                <a href="https://openai.github.io/openai-agents-python/" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">Agents SDK</a>               
                <a href="https://google.github.io/adk-docs/" className="inline-block px-3 py-1 text-md font-semibold text-accent bg-accent/10 rounded-full">Google ADK</a>               
              </div>
            </div>

          </div>
          <div className="mt-16 bg-gradient-to-r from-card to-card/80 rounded-2xl border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Additional Benefits</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-card/95 p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Python SDK</h3>
                </div>
                <p className="text-foreground-light flex-grow">A full-featured, open-source, and asynchronous <a className="text-primary hover:text-white" href="https://github.com/agentstr/agentstr-sdk">Python SDK</a> makes it easy to build performant agentic applications on Nostr and Lightning.</p>
              </div>

              <div className="bg-card/95 p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Comprehensive Docs</h3>
                </div>
                <p className="text-foreground-light flex-grow">Extensive <a className="text-primary hover:text-white" href="/docs">documentation</a>, <a className="text-primary hover:text-white" href="/usage">guides</a>, and <a className="text-primary hover:text-white" href="https://github.com/agentstr/agentstr-sdk/tree/main/examples">examples</a> to help you quickly get started building decentralized applications with Agentstr.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}