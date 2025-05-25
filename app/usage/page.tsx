import CodeBlock from "../../components/CodeBlock";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function UsagePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Usage</span>
            <span className="block text-primary">Agentstr SDK</span>
          </h1>
          <p className="mt-3 text-base text-foreground-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Explore practical examples using the Agentstr SDK.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <div className="rounded-md shadow">
                  <a
                    href="/docs"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium whitespace-nowrap rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                  >
                    SDK Reference
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-md shadow">
                  <a
                    href="https://github.com/ehallmark/agentstr-sdk/tree/main/examples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium whitespace-nowrap rounded-md text-white bg-accent hover:bg-accent-dark md:py-4 md:text-lg md:px-10"
                  >
                    <span className="flex items-center justify-center">
                      View in GitHub
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>
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
              <h2 className="text-xl font-semibold text-white mb-4">Nostr RAG</h2>
              <p className="text-gray-400 mb-4">
                Agentstr SDK provides powerful RAG (Retrieval-Augmented Generation) capabilities integrated with Nostr. This allows you to build intelligent agents that can search and retrieve relevant information from Nostr notes. Integrate with <a className="text-indigo-400 hover:text-white" href="https://www.routstr.com/">Routstr</a> for decentralized, private LLM access.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrRAG

# Define relays
relays   = ['wss://some.relay.io']

# Define LLM base URL and API key
base_url = 'https://api.routstr.com/v1'
api_key  = 'cashuA1DkpMb...'

# Create the RAG instance
rag = NostrRAG(relays=relays,
               llm_model_name='qwen/qwen3-14b',
               llm_base_url=base_url,
               llm_api_key=api_key)

# Query the RAG
print(rag.query(question="What's new with Bitcoin?"))`}
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

# Define relays and private key
relays   = ['wss://some.relay.io']
private_key = 'nsec...'

# Define tools
def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""
    return a * b

# Define the server
server = NostrMCPServer("Math MCP Server", relays=relays, private_key=private_key)

# Add tools
server.add_tool(add)
server.add_tool(multiply, name="multiply", description="Multiply two numbers")

# Start the server
server.start()
`}
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

# Define relays and private key
relays = ['wss://some.relay.io']
private_key = 'nsec...'

# Define MCP server public key
server_public_key = 'npub...'

# Initialize the client
mcp_client = NostrMCPClient(mcp_pubkey=server_public_key, relays=relays, private_key=private_key)

# List available tools
tools = mcp_client.list_tools()
print(f'Found tools: {json.dumps(tools, indent=4)}')

# Call a tool
result = mcp_client.call_tool("multiply", {"a": 69, "b": 420})
print(f'The result of 69 * 420 is: {result["content"][-1]["text"]}')`}
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

# Define relays and private key
relays = ['wss://some.relay.io']
private_key = 'nsec...'

# Define Nostr Wallet Connect string to support lightning payments
nwc_str = 'nostr+walletconnect://...'

# Define agent URL
agent_url = 'http://localhost:8000'

# Create the server
server = NostrAgentServer(
    agent_url=agent_url,
    satoshis=100,  # Satoshis required for agent interaction
    relays=relays,
    private_key=private_key)

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
                Check out the <a href="/demo" className="text-indigo-400 hover:text-white">Demo</a> to see how Agentstr can be used in a real-world scenario.
              </p>
              <p className="text-gray-400">
                Check out our <a href="/docs" className="text-indigo-400 hover:text-white">SDK Reference</a> for more details on each component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
