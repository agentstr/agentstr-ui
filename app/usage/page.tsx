import CodeBlock from "../../components/CodeBlock";

export default function UsagePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            <span className="block">Usage</span>
            <span className="block text-indigo-400">Agentstr SDK</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Explore practical examples using the Agentstr SDK.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/docs"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                View Docs
              </a>
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
              <h2 className="text-xl font-semibold text-white mb-4">Nostr MCP Servers</h2>
              <p className="text-gray-400 mb-4">
                Create servers that provide tools and services to other Nostr clients.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrMCPServer

# Define a simple tool
def greet(name: str) -> str:
    """Greet someone"""
    return f"Hello, {name}!"

def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b

# Initialize the server
server = NostrMCPServer(
    name="Greeting Server",
    private_key="your_private_key",
    relays=["wss://relay.damus.io"]
)

# Add tools
server.add_tool(greet, name="greet", description="Greet someone")
server.add_tool(add, name="add", description="Add two numbers")

# Start the server
server.start()`}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr MCP Clients</h2>
              <p className="text-gray-400 mb-4">
                Create clients that can discover and use tools from MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrMCPClient

# Initialize the client
client = NostrMCPClient(
    private_key="your_private_key",
    relays=["wss://relay.damus.io"]
)

# Discover available tools
available_tools = await client.discover_tools()
print("Available tools:", available_tools)

# Use a tool
result = await client.use_tool(
    tool_id="greet",
    parameters={"name": "John"}
)
print("Tool result:", result)`}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr Agent Servers</h2>
              <p className="text-gray-400 mb-4">
                Create intelligent agents that can both provide and use tools on the Nostr network.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrAgentServer

# Define agent logic
def agent_logic(tool_results):
    """Agent's decision-making logic"""
    # Example: Use previous tool results to decide next action
    if "weather" in tool_results:
        if tool_results["weather"]["temperature"] > 30:
            return "get_drink"
    return "check_weather"

# Initialize the agent server
agent = NostrAgentServer(
    name="Weather Agent",
    private_key="your_private_key",
    relays=["wss://relay.damus.io"],
    agent_logic=agent_logic
)

# Add tools for the agent
agent.add_tool(
    name="check_weather",
    description="Check current weather",
    function=lambda location: f"Current weather in {location} is sunny"
)

agent.add_tool(
    name="get_drink",
    description="Get a drink",
    function=lambda drink_type: f"Getting {drink_type} for you"
)

# Start the agent
agent.start()`}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
              <p className="text-gray-400 mb-4">
                Check out the <a href="/demo" className="text-indigo-400 hover:text-white">Demo</a> to see how Agentstr can be used in a real-world scenario.
              </p>
              <p className="text-gray-400">
                Check out our <a href="/docs" className="text-indigo-400 hover:text-white">API Reference</a> for more details on each component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
