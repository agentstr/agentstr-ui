import CodeBlock from "../components/CodeBlock";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to the</span>
            <span className="block text-indigo-400">Python SDK Documentation</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            A comprehensive guide to using our Python library and SDK for building powerful Agentic applications on Nostr.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/docs/getting-started"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/docs/api"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-400 bg-indigo-900 hover:bg-indigo-800 md:py-4 md:text-lg md:px-10"
              >
                API Reference
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Start</h2>
              <CodeBlock
                language="python"
                value={`# Install the package
pip install agentstr-sdk

# Import the SDK
from agentstr import NostrMCPServer

# Define some tools
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b

def multiply(a: int, b: int) -> int:
    """Multiply two numbers"""
    return a * b

# Initialize the server
server = NostrMCPServer(name="Math MCP Server", 
                        private_key="nsec...",
                        relays=["wss://some-relay.com"])

server.add_tool(add)  # Add by signature alone
server.add_tool(multiply, name="multiply", description="Multiply two numbers")  # Add by signature and name

# Start the server
server.start()
`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
