import CodeBlock from "../../components/CodeBlock";

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            <span className="block">Getting Started</span>
            <span className="block text-indigo-400">with Agentstr SDK</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Learn how to set up and use Agentstr SDK to build powerful Nostr-based applications.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Prerequisites</h2>
              <p className="text-gray-400 mb-4">
                Before you begin, make sure you have the following installed:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6">
                <li>Python 3.8 or higher</li>
                <li>pip (Python package manager)</li>
                <li>A Nostr-compatible relay URL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Installation</h2>
              <p className="text-gray-400 mb-4">
                Install Agentstr SDK using pip:
              </p>
              <CodeBlock
                language="bash"
                value={`pip install agentstr-sdk`}
              />
              <p className="text-gray-400 mt-4">
                Or, if you prefer to install from source:
              </p>
              <CodeBlock
                language="bash"
                value={`git clone https://github.com/ehallmark/agentstr-sdk.git
                cd agentstr-sdk
                pip install -e .`}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Basic Usage</h2>
              <p className="text-gray-400 mb-4">
                Here's a simple example of how to use Agentstr SDK:
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrMCPServer

# Define a simple tool
def greet(name: str) -> str:
    """Greet someone"""
    return f"Hello, {name}!"

# Initialize the server
server = NostrMCPServer(
    name="Greeting Server",
    private_key="your_private_key",
    relays=["wss://relay.damus.io"]
)

# Add the tool
server.add_tool(greet, name="greet", description="Greet someone")

# Start the server
server.start()`}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
              <p className="text-gray-400 mb-4">
                Now that you have the basics down, you can explore more advanced features:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6">
                <li>Creating custom tools</li>
                <li>Working with Nostr events</li>
                <li>Managing multiple relays</li>
                <li>Handling authentication</li>
                <li>Building complex workflows</li>
              </ul>
              <p className="text-gray-400">
                Check out our <a href="/docs/api" className="text-indigo-400 hover:text-white">API Reference</a> for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
