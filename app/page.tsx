export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Welcome to the</span>
            <span className="block text-primary">Agentstr SDK</span>
          </h1>
          <p className="mt-3 text-base text-foreground-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            A comprehensive guide to using our Python library and SDK for building powerful Agentic applications on Nostr.
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

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Agentic Architecture</h3>
              <p className="text-foreground-light">Build intelligent, autonomous agents that can make decisions and interact with the decentralized web.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Censorship Resistance</h3>
              <p className="text-foreground-light">Built on decentralized protocols, Agentstr provides robust censorship resistance and privacy.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Python SDK</h3>
              <p className="text-foreground-light">Leverage our powerful MIT-licensed Python SDK to build complex agentic applications quickly and efficiently.</p>
            </div>
            <div className="bg-gray-800 bg-card/95 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">Documentation</h3>
              <p className="text-foreground-light">Comprehensive documentation to help you get started and build amazing decentralized applications.</p>
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Langgraph Integration</h3>
              <p className="text-foreground-light">Easily connect <a className="text-indigo-400 hover:text-white" href="https://www.langchain.com/langgraph">Langgraph</a> agents to Nostr MCP servers for decentralized tool calling and discovery.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}