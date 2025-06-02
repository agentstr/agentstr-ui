export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Welcome to the</span>
            <span className="block text-primary">Agentstr SDK</span>
          </h1>

          <p className="mt-3 text-base text-gray-300 max-w-xl sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl leading-relaxed">
            A powerful toolkit for building decentralized agentic applications. Built on the Nostr and Lightning protocols, and integrates seamlessly with leading AI frameworks.
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
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Agentstr SDK Overview</h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card/95 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Decentralized</h3>
                <p className="text-foreground-light text-center">Built on the Nostr protocol and Lightning network for permissionless agents.</p>
              </div>

              <div className="bg-card/95 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Multi-Framework</h3>
                <p className="text-foreground-light text-center">Supports Agno, DSPy, LangGraph, and PydanticAI for flexible agent development.</p>
              </div>

              <div className="bg-card/95 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Secure</h3>
                <p className="text-foreground-light text-center">End-to-end encryption and cryptographic verification for all agent communications.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-card to-card/80 rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Key Integrations</h3>
              <p className="text-foreground-light mb-6 text-center">
                Agentstr SDK seamlessly connects with leading protocols and frameworks:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://modelcontextprotocol.io/introduction" className="px-4 py-2 bg-card hover:bg-card/80 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors">MCP</a>
                <a href="https://google-a2a.github.io/A2A/" className="px-4 py-2 bg-card hover:bg-card/80 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors">A2A</a>
                <a href="https://docs.agno.com/introduction" className="px-4 py-2 bg-card hover:bg-card/80 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors">Agno</a>
                <a href="https://dspy.ai/" className="px-4 py-2 bg-card hover:bg-card/80 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors">DSPy</a>
                <a href="https://www.langchain.com/langgraph" className="px-4 py-2 bg-card hover:bg-card/80 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors">LangGraph</a>
                <a href="https://ai.pydantic.dev/" className="px-4 py-2 bg-card hover:bg-card/80 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors">PydanticAI</a>
              </div>
              <p className="text-foreground-light mt-6 text-center">
                To ensure full stack decentralization, it is recommended to use <a className="text-primary hover:text-white" href="https://www.routstr.com/">Routstr</a> as your LLM provider.
              </p>
            </div>
          </div>          
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Agentic Architecture</h3>
              <p className="text-foreground-light">Build intelligent, autonomous agents that interact with the decentralized world.  <a className="text-indigo-400 hover:text-white" href="https://docs.anthropic.com/en/docs/agents-and-tools/mcp">MCP</a> and <a className="text-indigo-400 hover:text-white" href="https://google-a2a.github.io/A2A/">A2A</a> enabled.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Censorship Resistance</h3>
              <p className="text-foreground-light">Built entirely on decentralized protocols, Agentstr provides robust censorship resistance and privacy.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Python SDK</h3>
              <p className="text-foreground-light">A full-featured, open-source, and asynchronous <a className="text-indigo-400 hover:text-white" href="https://github.com/agentstr/agentstr-sdk">Python SDK</a> to build performant agentic applications on Nostr.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Documentation</h3>
              <p className="text-foreground-light">Comprehensive <a className="text-indigo-400 hover:text-white" href="/docs">documentation</a> to help you get started building decentralized applications quickly.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Nostr Integration</h3>
              <p className="text-foreground-light">Seamlessly integrate with the <a className="text-indigo-400 hover:text-white" href="https://nostr.com/">Nostr</a> protocol to build decentralized agents and tools.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Lightning Integration</h3>
              <p className="text-foreground-light">Integrate with the <a className="text-indigo-400 hover:text-white" href="https://lightning.network/">Lightning Network</a> for fast, low-cost micropayments and instant transactions.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Routstr Integration</h3>
              <p className="text-foreground-light">Leverage <a className="text-indigo-400 hover:text-white" href="https://www.routstr.com/">Routstr</a> for decentralized, private, and secure LLM routing.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">AI Integration</h3>
              <p className="text-foreground-light">Use popular agentic frameworks like <a className="text-indigo-400 hover:text-white" href="https://docs.agno.com/introduction">Agno</a>, <a className="text-indigo-400 hover:text-white" href="https://www.langchain.com/langgraph">LangGraph</a>, <a className="text-indigo-400 hover:text-white" href="https://dspy.ai/">DSPy</a>, and <a className="text-indigo-400 hover:text-white" href="https://ai.pydantic.dev/">PydanticAI</a> to expedite development.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}