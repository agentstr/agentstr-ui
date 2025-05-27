'use client';

import React from 'react';
import CodeBlock from "../../components/CodeBlock";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function UsagePage() {
  const [isTocOpen, setIsTocOpen] = React.useState(false);

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
                    href="https://github.com/ehallmark/agentstr-sdk.git"
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
              <div 
                className="flex items-center justify-between mb-4 cursor-pointer hover:bg-gray-700 rounded-md p-2"
                onClick={() => setIsTocOpen(!isTocOpen)}
              >
                <h2 className="text-xl font-semibold text-white">Table of Contents</h2>
                <span className="text-gray-400 hover:text-white">
                  {isTocOpen ? '▼' : '▶'}
                </span>
              </div>
              <div className={`space-y-3 ${isTocOpen ? 'block' : 'hidden'}`}>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#installation" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Installation</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-rag" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr RAG</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-mcp-servers" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr MCP Server</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-mcp-clients" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr MCP Client</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-agent-servers" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr Agent Server</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#langgraph-agent" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Langgraph MCP Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#lightning-mcp" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Lightning Enablement</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="installation" className="mt-12 max-w-4xl mx-auto">
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

        <div id="nostr-rag" className="mt-12 max-w-4xl mx-auto">
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

        <div id="nostr-mcp-servers" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr MCP Server</h2>
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

        <div id="nostr-mcp-clients" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr MCP Client</h2>
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

        <div id="nostr-agent-servers" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr Agent Server</h2>
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

        <div id="langgraph-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Langgraph MCP Agent</h2>
              <p className="text-gray-400 mb-4">
                Integrate Langgraph agents with Nostr MCP servers to enable decentralized tool calling and discovery. Note: this requires a few additional python libraries.
              </p>
              <CodeBlock
                language="bash"
                value={`pip install nostr-langchain-mcp langchain_openai langgraph`}
              />
              <CodeBlock
                language="python"
                value={`from langchain_mcp_adapters import MultiServerMCPClient
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent
from langgraph.checkpoint.memory import MemorySaver

# Define relays and private key
relays = ['wss://some.relay.io']
private_key = 'nsec...'

# Define Nostr Wallet Connect string to support lightning payments
nwc_str = 'nostr+walletconnect://...'

# Define MCP server public key
server_public_key = 'npub...'

# Define LLM base URL and API key
base_url = 'https://api.routstr.com/v1'
api_key  = 'cashuA1DkpMb...'

model = ChatOpenAI(temperature=0, 
                   base_url=base_url,
                   api_key=api_key,
                   model_name="gpt-4o")

async def nostr_mcp_agent():
    # Define MCP Server with Nostr transport
    async with MultiServerMCPClient(
        {
            "nostr-math-mcp": {
                "relays": relays,
                "server_public_key": server_public_key,
                "private_key": private_key,
                "nwc_str": nwc_str,
                "transport": "nostr",
            },
        }
    ) as client:
        # Create the agent
        agent = create_react_agent(model, client.get_tools(), checkpointer=MemorySaver())
        yield agent
    
if __name__ == '__main__':
    import asyncio

    # Async function to run the agent
    async def run():
        async with nostr_mcp_agent() as agent:
            async for output in agent.astream({"messages": "what's (4 + 20) * 69?"}, stream_mode="updates"):
                print(output)

    # Run the agent
    asyncio.run(run())`}
              />
            </div>
          </div>
        </div>

        <div id="lightning-mcp" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Lightning Enablement</h2>
              <p className="text-gray-400 mb-4">
                Create agents and MCP servers with Lightning payment support. When the tool is called, the MCP server will respond with a lightning invoice. Upon payment, the tool will be executed and the result will be sent to the client. This process is handled automatically by the Agentstr SDK.
              </p>
              <h3 className="text-lg font-semibold text-white mt-6">Lightning-Enabled MCP Server</h3>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrMCPServer

# Define relays and private key
relays = ['wss://some.relay.io']
private_key = 'nsec...'

# Define Nostr Wallet Connect string
nwc_str = 'nostr+walletconnect://...'

# Create Lightning-enabled MCP Server
server = NostrMCPServer(
    "Lightning Math Server",
    relays=relays,
    private_key=private_key,
    nwc_str=nwc_str,  # Enable Lightning payments
)

# Define a tool that requires payment
def premium_tool(**kwargs) -> int:
    """Premium service (requires payment)."""
    return 42

# Add the tool with payment requirement
server.add_tool(premium_tool, satoshis=10)

# Start the server
server.start()`}
              />
              <h3 className="text-lg font-semibold text-white mt-6">Client Integration</h3>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrMCPClient

# Define relays and private key
relays = ['wss://some.relay.io']
private_key = 'nsec...'

# Define MCP server public key
server_public_key = 'npub...'

# Define Nostr Wallet Connect string
nwc_str = 'nostr+walletconnect://...'

# Create Lightning-enabled MCP Client
client = NostrMCPClient(
    mcp_pubkey=server_public_key,
    relays=relays,
    private_key=private_key,
    nwc_str=nwc_str  # Enable Lightning payments
)

# Call a paid tool
result = client.call_tool("premium_tool", {"a": 100, "b": 200})
print(f'Result: {result["content"][-1]["text"]}')`}
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
