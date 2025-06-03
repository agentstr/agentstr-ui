'use client';

import React from 'react';
import CodeBlock from "../../components/CodeBlock";

export default function UsagePage() {
  const [isTocOpen, setIsTocOpen] = React.useState(true);

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
                    href="/docs"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium whitespace-nowrap rounded-md text-white bg-accent hover:bg-accent-dark md:py-4 md:text-lg md:px-10"
                  >
                    <span className="flex items-center justify-center">
                      View Reference
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
                  <a href="#nostr-mcp-server" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr MCP Server</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-mcp-client" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr MCP Client</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-tool-discovery" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr Tool Discovery</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-langgraph-agent" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr LangGraph Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-dspy-agent" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr DSPy Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-agno-agent" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr Agno Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-pydantic-agent" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr PydanticAI Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-openai-agent" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr OpenAI Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-rag" className="block text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr RAG</a>
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
                It is recommended to install the Agentstr SDK with <a className="text-indigo-400 hover:text-white" href="https://docs.astral.sh/uv/">uv</a>:
              </p>
              <CodeBlock
                language="bash"
                value={`uv add agentstr-sdk[all]`}
              />
              <p className="text-gray-400 mb-4 mt-4">
                But you can also install it with pip:
              </p>
              <CodeBlock
                language="bash"
                value={`pip install agentstr-sdk[all]`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-mcp-server" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr MCP Server</h2>
              <p className="text-gray-400 mb-4">
                MCP Servers are used to provide tools and services to other Nostr clients. Provide a Nostr Wallet Connect string to enable premium tools.
              </p>
              <CodeBlock
                language="python"
                value={`import os
from agentstr import NostrMCPServer

# Define relays and private key
relays   = os.getenv('NOSTR_RELAYS').split(',')
private_key = os.getenv('EXAMPLE_MCP_SERVER_NSEC')

# To enable Nostr Wallet Connect
nwc_str = os.getenv('MCP_SERVER_NWC_CONN_STR')

# Define tools
async def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

async def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""
    return a * b

async def run():
    # Define the server
    server = NostrMCPServer(
        "Math MCP Server", 
        relays=relays,
        private_key=private_key,
        nwc_str=nwc_str
    )

    # Add tools
    server.add_tool(add) # Free tool
    server.add_tool(multiply, satoshis=3) # Premium tool

    # Start the server
    await server.start()

if __name__ == "__main__":
    import asyncio
    asyncio.run(run())`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-mcp-client" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr MCP Client</h2>
              <p className="text-gray-400 mb-4">
                Create clients that can discover and use tools from MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`import os
import json
from agentstr import PrivateKey, NostrMCPClient


# Define relays and private key
relays   = os.getenv('NOSTR_RELAYS').split(',')
private_key = os.getenv('EXAMPLE_MCP_CLIENT_NSEC')

# To enable Nostr Wallet Connect
nwc_str = os.getenv('MCP_CLIENT_NWC_CONN_STR')

# Define MCP server public key
server_public_key = PrivateKey.from_nsec(os.getenv('EXAMPLE_MCP_SERVER_NSEC')).public_key.bech32()


async def run()   :
    # Initialize the client
    mcp_client = NostrMCPClient(mcp_pubkey=server_public_key, 
                                relays=relays, 
                                private_key=private_key,
                                nwc_str=nwc_str)

    # List available tools
    tools = await mcp_client.list_tools()
    print(f'Found tools: {json.dumps(tools, indent=4)}')

    # Call a tool
    result = await mcp_client.call_tool("add", {"a": 69, "b": 420})
    print(f'The result of 69 + 420 is: {result["content"][-1]["text"]}')

    # Call a premium tool
    result = await mcp_client.call_tool("multiply", {"a": 69, "b": 420})
    print(f'The result of 69 * 420 is: {result["content"][-1]["text"]}')


if __name__ == "__main__":
    import asyncio
    asyncio.run(run())`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-tool-discovery" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr Tool Discovery</h2>
              <p className="text-gray-400 mb-4">
                Search Nostr for MCP Servers to discover available tools.
              </p>
              <CodeBlock
                language="python"
                value={`import os
import json
from agentstr import NostrClient

# Define relays
relays = os.getenv('NOSTR_RELAYS').split(',')


async def run():
    client = NostrClient(relays)
    events = await client.read_posts_by_tag('mcp_research_tools', limit=2)
    for event in events:
        metadata = await client.get_metadata_for_pubkey(event.pubkey)
        try:
            mcp_definition = json.loads(metadata.about)
            print(json.dumps(mcp_definition, indent=4))
        except:
            pass


if __name__ == "__main__":
    import asyncio
    asyncio.run(run())`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-langgraph-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr LangGraph Agent</h2>
              <p className="text-gray-400 mb-4">
                Use <a className="text-indigo-400 hover:text-white" href="https://www.langchain.com/langgraph">LangGraph</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`import os

from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

from agentstr import NostrAgentServer, NostrMCPClient, ChatInput
from agentstr.mcp.langgraph import to_langgraph_tools


# Get the environment variables
relays = os.getenv("NOSTR_RELAYS").split(",")
private_key = os.getenv("EXAMPLE_LANGGRAPH_AGENT_NSEC")
mcp_server_pubkey = os.getenv("EXAMPLE_MCP_SERVER_PUBKEY")


nostr_mcp_client = NostrMCPClient(relays=relays,
                                  private_key=private_key,
                                  mcp_pubkey=mcp_server_pubkey)


# Define LLM
model = ChatOpenAI(temperature=0,
                   base_url=os.getenv("LLM_BASE_URL"),
                   api_key=os.getenv("LLM_API_KEY"),
                   model_name=os.getenv("LLM_MODEL_NAME"))


async def agent_server():
    # Convert tools to LangGraph tools
    langgraph_tools = await to_langgraph_tools(nostr_mcp_client)

    for tool in langgraph_tools:
        print(f'Found {tool.name}: {tool.description}')

    # Create react agent
    agent = create_react_agent(
        model=model,
        tools=langgraph_tools,
        prompt="You are a helpful assistant",
    )

    # Define agent callable
    async def agent_callable(input: ChatInput) -> str:
        result = await agent.ainvoke(
            {"messages": [{"role": "user", "content": input.messages[-1]}]},
        )
        return result["messages"][-1].content

    # Create Nostr Agent Server
    server = NostrAgentServer(relays=relays,
                              private_key=private_key,
                              agent_callable=agent_callable)

    # Start server
    await server.start()


if __name__ == "__main__":
    import asyncio
    asyncio.run(agent_server())`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-dspy-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr DSPy Agent</h2>
              <p className="text-gray-400 mb-4">
                Use <a className="text-indigo-400 hover:text-white" href="https://dspy.ai/">DSPy</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`import os

import dspy

from agentstr import NostrAgentServer, NostrMCPClient, ChatInput
from agentstr.mcp.dspy import to_dspy_tools

# Get the environment variables
relays = os.getenv("NOSTR_RELAYS").split(",")
private_key = os.getenv("EXAMPLE_DSPY_AGENT_NSEC")
mcp_server_pubkey = os.getenv("EXAMPLE_MCP_SERVER_PUBKEY")
llm_base_url = os.getenv("LLM_BASE_URL").rstrip("/v1")
llm_api_key = os.getenv("LLM_API_KEY")
llm_model_name = os.getenv("LLM_MODEL_NAME")


nostr_mcp_client = NostrMCPClient(relays=relays,
                                  private_key=private_key,
                                  mcp_pubkey=mcp_server_pubkey)


async def agent_server():    
    # Convert tools to DSPy tools
    dspy_tools = await to_dspy_tools(nostr_mcp_client)

    for tool in dspy_tools:
        print(f'Found {tool.name}: {tool.desc}')

    # Create ReAct agent
    react = dspy.ReAct("question -> answer: str", tools=dspy_tools)

    # Configure DSPy
    dspy.configure(lm=dspy.LM(model=llm_model_name, 
                              api_base=llm_base_url, 
                              api_key=llm_api_key, 
                              model_type="chat",
                              temperature=0))

    # Define agent callable
    async def agent_callable(chat_input: ChatInput) -> str:
        return (await react.acall(question=chat_input.messages[-1])).answer

    # Create Nostr Agent Server
    server = NostrAgentServer(relays=relays,
                              private_key=private_key,
                              agent_callable=agent_callable)

    # Start server
    await server.start()


if __name__ == "__main__":
    import asyncio
    asyncio.run(agent_server())`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-agno-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr Agno Agent</h2>
              <p className="text-gray-400 mb-4">
                Use <a className="text-indigo-400 hover:text-white" href="https://docs.agno.com/introduction">Agno</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`import os

from agno.agent import Agent
from agno.models.openai import OpenAIChat

from agentstr import ChatInput, NostrAgentServer, NostrMCPClient
from agentstr.mcp.agno import to_agno_tools

# Get the environment variables
relays = os.getenv("NOSTR_RELAYS").split(",")
private_key = os.getenv("EXAMPLE_AGNO_AGENT_NSEC")
mcp_server_pubkey = os.getenv("EXAMPLE_MCP_SERVER_PUBKEY")


nostr_mcp_client = NostrMCPClient(relays=relays,
                                  private_key=private_key,
                                  mcp_pubkey=mcp_server_pubkey)



async def agent_server():
    # Define tools
    agno_tools = await to_agno_tools(nostr_mcp_client)

    for tool in agno_tools:
        print(f'Found {tool.name}: {tool.description}')

    # Define Agno agent
    agent = Agent(
        model=OpenAIChat(
            temperature=0,
            base_url=os.getenv("LLM_BASE_URL"),
            api_key=os.getenv("LLM_API_KEY"),
            id=os.getenv("LLM_MODEL_NAME"),
        ),
        tools=agno_tools,
    )

    # Define agent callable
    async def agent_callable(input: ChatInput) -> str:
        result = await agent.arun(message=input.messages[-1], session_id=input.thread_id)
        return result.content

    # Create Nostr Agent Server
    server = NostrAgentServer(relays=relays,
                              private_key=private_key,
                              agent_callable=agent_callable)

    # Start server
    await server.start()


if __name__ == "__main__":
    import asyncio
    asyncio.run(agent_server())
`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-pydantic-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr PydanticAI Agent</h2>
              <p className="text-gray-400 mb-4">
                Use <a className="text-indigo-400 hover:text-white" href="https://ai.pydantic.dev/">PydanticAI</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`import os

from pydantic_ai import Agent
from pydantic_ai.models.openai import OpenAIModel
from pydantic_ai.providers.openai import OpenAIProvider

from agentstr import ChatInput, NostrAgentServer, NostrMCPClient
from agentstr.mcp.pydantic import to_pydantic_tools

# Get the environment variables
relays = os.getenv("NOSTR_RELAYS").split(",")
private_key = os.getenv("EXAMPLE_PYDANTIC_AGENT_NSEC")
mcp_server_pubkey = os.getenv("EXAMPLE_MCP_SERVER_PUBKEY")


nostr_mcp_client = NostrMCPClient(relays=relays,
                                  private_key=private_key,
                                  mcp_pubkey=mcp_server_pubkey)



async def agent_server():
    # Define tools
    pydantic_tools = await to_pydantic_tools(nostr_mcp_client)

    for tool in pydantic_tools:
        print(f'Found {tool.name}: {tool.description}')

    # Define Pydantic agent
    agent = Agent(
        system="You are a helpful assistant.",
        model=OpenAIModel(
            os.getenv("LLM_MODEL_NAME"),
            provider=OpenAIProvider(
                base_url=os.getenv("LLM_BASE_URL"),
                api_key=os.getenv("LLM_API_KEY"),
            )
        ),
        tools=pydantic_tools,
    )

    # Define agent callable
    async def agent_callable(input: ChatInput) -> str:
        result = await agent.run(input.messages[-1])
        return result.output

    # Create Nostr Agent Server
    server = NostrAgentServer(relays=relays,
                              private_key=private_key,
                              agent_callable=agent_callable)

    # Start server
    await server.start()


if __name__ == "__main__":
    import asyncio
    asyncio.run(agent_server())`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-openai-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr OpenAI Agent</h2>
              <p className="text-gray-400 mb-4">
                Use OpenAI's <a className="text-indigo-400 hover:text-white" href="https://openai.github.io/openai-agents-python/">Agents SDK</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`import os

from agents import Runner, Agent, AsyncOpenAI, OpenAIChatCompletionsModel
from agentstr import ChatInput, NostrAgentServer, NostrMCPClient
from agentstr.mcp.openai import to_openai_tools

# Get the environment variables
relays = os.getenv("NOSTR_RELAYS").split(",")
private_key = os.getenv("EXAMPLE_OPENAI_AGENT_NSEC")
mcp_server_pubkey = os.getenv("EXAMPLE_MCP_SERVER_PUBKEY")

# Enable lightning payments
nwc_str = os.getenv("MCP_CLIENT_NWC_CONN_STR")

# Create Nostr MCP client
nostr_mcp_client = NostrMCPClient(relays=relays,
                                  private_key=private_key,
                                  mcp_pubkey=mcp_server_pubkey,
                                  nwc_str=nwc_str)


async def agent_server():
    # Define tools
    openai_tools = await to_openai_tools(nostr_mcp_client)

    for tool in openai_tools:
        print(f'Found {tool.name}: {tool.description}')

    # Define OpenAI agent
    agent = Agent(
        name="OpenAI Agent",
        instructions="You are a helpful assistant.",
        model=OpenAIChatCompletionsModel(
            model=os.getenv("LLM_MODEL_NAME"),
            openai_client=AsyncOpenAI(
                base_url=os.getenv("LLM_BASE_URL"),
                api_key=os.getenv("LLM_API_KEY"),
            )
        ),
        tools=openai_tools,
    )

    # Define agent callable
    async def agent_callable(input: ChatInput) -> str:
        result = await Runner.run(agent, input=input.messages[-1])
        return result.final_output

    # Create Nostr Agent Server
    server = NostrAgentServer(relays=relays,
                              private_key=private_key,
                              agent_callable=agent_callable,
                              nwc_str=nwc_str)

    # Start server
    await server.start()


if __name__ == "__main__":
    import asyncio
    asyncio.run(agent_server())`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-rag" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Nostr RAG</h2>
              <p className="text-gray-400 mb-4">
                Agentstr SDK provides powerful RAG (Retrieval-Augmented Generation) capabilities integrated with Nostr. This allows you to build intelligent agents that can search and retrieve relevant information from Nostr notes.
              </p>
              <CodeBlock
                language="python"
                value={`import os
from agentstr import NostrRAG
from langchain_openai import ChatOpenAI

# Define relays
relays   = os.getenv('NOSTR_RELAYS').split(',')

# Define LLM
model = ChatOpenAI(temperature=0,
                   base_url=os.getenv('LLM_BASE_URL'),
                   api_key=os.getenv('LLM_API_KEY'),
                   model_name=os.getenv('LLM_MODEL_NAME'))

# Create the RAG instance
rag = NostrRAG(relays=relays,
               llm=model)

# Run a RAG query
async def run():
    result = await rag.query(question="What's new with Bitcoin?")
    print(result)

if __name__ == "__main__":
    import asyncio
    asyncio.run(run())`}
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
