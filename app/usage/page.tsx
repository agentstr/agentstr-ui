'use client';

import React from 'react';
import CodeBlock from "../../components/CodeBlock";

export default function UsagePage() {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const scrollToAnchor = () => {
        const id = window.location.hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      // Try immediately, then again after a short delay in case hydration is slow
      scrollToAnchor();
      const timeout = setTimeout(scrollToAnchor, 250);
      return () => clearTimeout(timeout);
    }
  }, []);

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
                    href="/docs"
                    className="flex items-center justify-center px-8 py-3 border border-accent text-base font-medium whitespace-nowrap rounded-md bg-white text-accent shadow-sm hover:bg-accent hover:text-white transition-colors duration-200 dark:bg-accent dark:text-white dark:border-transparent dark:hover:bg-accent-dark md:py-4 md:text-lg md:px-10"
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
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6 table-of-contents">
              <div 
                className="flex items-center justify-between mb-4 cursor-pointer hover:bg-gray-700 rounded-md p-2 toc-header"
                onClick={() => setIsTocOpen(!isTocOpen)}
              >
                <h2 className="text-xl font-semibold text-foreground">Table of Contents</h2>
                <span className="text-gray-600 dark:text-gray-400 hover:text-foreground">
                  {isTocOpen ? '▼' : '▶'}
                </span>
              </div>
              <div className={`space-y-3 ${isTocOpen ? 'block' : 'hidden'}`}>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#installation" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Installation</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-mcp-server" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr MCP Server</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-mcp-client" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr MCP Client</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#lightning-integration" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Lightning Integration</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-tool-discovery" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr Tool Discovery</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-langgraph-agent" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr LangGraph Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-dspy-agent" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr DSPy Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-agno-agent" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr Agno Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-pydantic-agent" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr PydanticAI Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-openai-agent" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr OpenAI Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-google-agent" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr Google ADK Agent</a>
                </div>
                <div className="border-l-2 border-gray-600 pl-3">
                  <a href="#nostr-rag" className="block text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-700 rounded-md px-3 py-2 transition-colors">Nostr RAG</a>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div id="installation" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Installation</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                It is recommended to install the Agentstr SDK with <a className="text-primary hover:text-foreground" href="https://docs.astral.sh/uv/">uv</a>:
              </p>
              <CodeBlock
                language="bash"
                value={`uv add agentstr-sdk[all]`}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-4 mt-4">
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
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr MCP Server</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                MCP Servers are used to provide tools and services to other Nostr clients. Provide a <a className="text-primary hover:text-foreground" href="https://nwc.dev/">Nostr Wallet Connect</a> string to enable premium tools.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrMCPServer

# Define relays and private key
relays = ['wss://some.relay']
private_key = 'nsec...'

# To enable Nostr Wallet Connect
nwc_str = 'nostr+walletconnect://...'

# Define tools
async def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

async def multiply(a: int, b: int) -> int:
    """Multiply two numbers."""
    return a * b

# Define the server
server = NostrMCPServer(
    "Math MCP Server", 
    relays=relays,
    private_key=private_key,
    nwc_str=nwc_str
)

# Add tools
server.add_tool(add) # Free tool
server.add_tool(multiply, satoshis=10) # Premium tool

# Start the server
await server.start()`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/mcp_server.py">MCP Server Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div id="nostr-mcp-client" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr MCP Client</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create Nostr MCP clients that can discover and use tools from Nostr MCP servers. Provide a <a className="text-primary hover:text-foreground" href="https://nwc.dev/">Nostr Wallet Connect</a> string to handle tool payments.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrMCPClient

# Define relays and private key
relays = ['wss://some.relay']
private_key = 'nsec...'

# To enable Nostr Wallet Connect
nwc_str = 'nostr+walletconnect://...'

# Set MCP server public key
server_public_key = 'npub...'

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
print(f'The result of 69 * 420 is: {result["content"][-1]["text"]}')`}
              />

              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/mcp_client.py">MCP Client Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div id="lightning-integration" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Lightning Integration</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Nostr MCP servers and agents can require Lightning payments to pay for various tools and services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Each tool can specify a <code>satoshis</code> parameter to indicate the amount of sats required to invoke the tool.
              </p>  

              <p className="text-gray-600 dark:text-gray-400 mb-4"></p>
              <CodeBlock
                language="python"
                value={`def premium_tool():
    """Do something that costs 100 sats."""
    return "Premium tool executed!"

# Add to MCP server
mcp_server.add_tool(
    fn=premium_tool, 
    satoshis=100
)`}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-4 mt-4">
                Agents specify <code>satoshis</code> in the <code>AgentCard</code> to indicate the number of sats required to use a particular skill.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import AgentCard, Skill, NostrAgentServer

# Define agent info
agent_info = AgentCard(
    name='Premium Agent',
    description=('This agent can do premium things.'),
    skills=[
        Skill(name='free_skill',
              description='A free skill.', 
              satoshis=0),
        Skill(name='paid_skill', 
              description='A paid skill.', 
              satoshis=100),
    ],
    satoshis=10, # Additional satoshis required to use the agent
    nostr_pubkey='npub...',
)

# Create the agent server
server = NostrAgentServer(nwc_str='nostr+walletconnect://...',
                          agent_info=agent_info,
                          ...)`}
              />
            </div>
          </div>
        </div>

        <div id="nostr-tool-discovery" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr Tool Discovery</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Search Nostr for MCP Servers to discover available tools.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrClient

# Define relays
relays = ['wss://some.relay']

# Initialize the client
client = NostrClient(relays)

# Search for MCP servers by tag
events = await client.read_posts_by_tag('mcp_research_tools', limit=5)

# Print MCP server definitions
for event in events:
    metadata = await client.get_metadata_for_pubkey(event.pubkey)
    try:
        mcp_definition = json.loads(metadata.about)
        print(json.dumps(mcp_definition, indent=4))
    except:
        pass  # invalid definition`}
              />
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/tool_discovery.py">Tool Discovery Example</a>.
            </p>
            </div>
          </div>
        </div>

        <div id="nostr-langgraph-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr LangGraph Agent</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Use <a className="text-primary hover:text-foreground" href="https://www.langchain.com/langgraph">LangGraph</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

from agentstr import NostrAgentServer, NostrMCPClient, ChatInput
from agentstr.mcp.langgraph import to_langgraph_tools

# Initialize the MCP client
nostr_mcp_client = NostrMCPClient(relays=['wss://some.relay'],
                                  private_key='nsec...',
                                  mcp_pubkey='npub...',
                                  nwc_str='nostr+walletconnect://...')

# Convert tools to LangGraph tools
langgraph_tools = await to_langgraph_tools(nostr_mcp_client)

# Define LLM
model = ChatOpenAI(temperature=0,
                   base_url="https://api.routstr.com/v1",
                   api_key="cashu...",
                   model_name="gpt-4")

# Create LangGraph ReAct agent
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
server = NostrAgentServer(agent_callable=agent_callable,
                          nostr_mcp_client=nostr_mcp_client)

# Start server
await server.start()`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/nostr_langgraph_agent.py">LangGraph Agent Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div id="nostr-dspy-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr DSPy Agent</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Use <a className="text-primary hover:text-foreground" href="https://dspy.ai/">DSPy</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`import dspy

from agentstr import NostrAgentServer, NostrMCPClient, ChatInput
from agentstr.mcp.dspy import to_dspy_tools

# Initialize NostrMCPClient
nostr_mcp_client = NostrMCPClient(relays=['wss://some.relay'],
                                  private_key='nsec...',
                                  mcp_pubkey='npub...',
                                  nwc_str='nostr+walletconnect://...')

# Convert tools to DSPy tools
dspy_tools = await to_dspy_tools(nostr_mcp_client)

# Create ReAct agent
react = dspy.ReAct("question -> answer: str", tools=dspy_tools)

# Configure DSPy
dspy.configure(lm=dspy.LM(model='gpt-4', 
                          api_base='https://api.routstr.com/v1', 
                          api_key='cashu...', 
                          model_type="chat",
                          temperature=0))

# Define agent callable
async def agent_callable(chat_input: ChatInput) -> str:
    return (await react.acall(question=chat_input.messages[-1])).answer

# Create Nostr Agent Server
server = NostrAgentServer(agent_callable=agent_callable,
                          nostr_mcp_client=nostr_mcp_client)

# Start server
await server.start()`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/nostr_dspy_agent.py">DSPy Agent Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div id="nostr-agno-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr Agno Agent</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Use <a className="text-primary hover:text-foreground" href="https://docs.agno.com/introduction">Agno</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`from agno.agent import Agent
from agno.models.openai import OpenAIChat

from agentstr import ChatInput, NostrAgentServer, NostrMCPClient
from agentstr.mcp.agno import to_agno_tools

# Initialize NostrMCPClient
nostr_mcp_client = NostrMCPClient(relays=['wss://some.relay'],
                                  private_key='nsec...',
                                  mcp_pubkey='npub...',
                                  nwc_str='nostr+walletconnect://...')

# Convert MCP tools to Agno tools
agno_tools = await to_agno_tools(nostr_mcp_client)

# Define Agno agent
agent = Agent(
    model=OpenAIChat(
        temperature=0,
        base_url='https://api.routstr.com/v1',
        api_key='cashu...',
        id='gpt-4',
    ),
    tools=agno_tools,
)

# Define agent callable
async def agent_callable(input: ChatInput) -> str:
    result = await agent.arun(message=input.messages[-1], session_id=input.thread_id)
    return result.content

# Create Nostr Agent Server
server = NostrAgentServer(agent_callable=agent_callable,
                          nostr_mcp_client=nostr_mcp_client)

# Start server
await server.start()`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/nostr_agno_agent.py">Agno Agent Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div id="nostr-pydantic-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr PydanticAI Agent</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Use <a className="text-primary hover:text-foreground" href="https://ai.pydantic.dev/">PydanticAI</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`from pydantic_ai import Agent
from pydantic_ai.models.openai import OpenAIModel
from pydantic_ai.providers.openai import OpenAIProvider

from agentstr import ChatInput, NostrAgentServer, NostrMCPClient
from agentstr.mcp.pydantic import to_pydantic_tools

# Initialize NostrMCPClient
nostr_mcp_client = NostrMCPClient(relays=['wss://some.relay'],
                                  private_key='nsec...',
                                  mcp_pubkey='npub...',
                                  nwc_str='nostr+walletconnect://...')

# Convert MCP tools to Pydantic tools
pydantic_tools = await to_pydantic_tools(nostr_mcp_client)

# Define Pydantic agent
agent = Agent(
    system="You are a helpful assistant.",
    model=OpenAIModel(
        model_name='gpt-4',
        provider=OpenAIProvider(
            base_url='https://api.routstr.com/v1',
            api_key='cashu...',
        )
    ),
    tools=pydantic_tools,
)

# Define agent callable
async def agent_callable(input: ChatInput) -> str:
    result = await agent.run(input.messages[-1])
    return result.output

# Create Nostr Agent Server
server = NostrAgentServer(agent_callable=agent_callable,
                          nostr_mcp_client=nostr_mcp_client)

# Start server
await server.start()`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/nostr_pydantic_agent.py">PydanticAI Agent Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div id="nostr-openai-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr OpenAI Agent</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Use OpenAI&apos;s <a className="text-primary hover:text-foreground" href="https://openai.github.io/openai-agents-python/">Agents SDK</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`from agents import Runner, Agent, AsyncOpenAI, OpenAIChatCompletionsModel
from agentstr import ChatInput, NostrAgentServer, NostrMCPClient
from agentstr.mcp.openai import to_openai_tools

# Initialize NostrMCPClient
nostr_mcp_client = NostrMCPClient(relays=['wss://some.relay'],
                                  private_key='nsec...',
                                  mcp_pubkey='npub...',
                                  nwc_str='nostr+walletconnect://...')

# Convert MCP tools to OpenAI tools
openai_tools = await to_openai_tools(nostr_mcp_client)

# Define OpenAI agent
agent = Agent(
    system="You are a helpful assistant.",
    model=OpenAIChatCompletionsModel(
        model_name='gpt-4',
        provider=AsyncOpenAI(
            base_url='https://api.routstr.com/v1',
            api_key='cashu...',
        )
    ),
    tools=openai_tools,
)

# Define agent callable
async def agent_callable(input: ChatInput) -> str:
    result = await Runner.run(agent, input=input.messages[-1])
    return result.final_output

# Create Nostr Agent Server
server = NostrAgentServer(agent_callable=agent_callable,
                          nostr_mcp_client=nostr_mcp_client)

# Start server
await server.start()`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/nostr_openai_agent.py">OpenAI Agent Example</a>.
              </p>
            </div>
          </div>
        </div>
        
        <div id="nostr-google-agent" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr Google Agent</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Use Google&apos;s <a className="text-primary hover:text-foreground" href="https://google.github.io/adk-docs/">Agents SDK</a> to build decentralized Nostr agents and connect them to any Nostr MCP servers.
              </p>
              <CodeBlock
                language="python"
                value={`from google.adk.agents import Agent
from google.adk.models.lite_llm import LiteLlm
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

from agentstr import ChatInput, NostrAgentServer, NostrMCPClient
from agentstr.mcp.google import to_google_tools

# Initialize NostrMCPClient
nostr_mcp_client = NostrMCPClient(relays=['wss://some.relay'],
                                  private_key='nsec...',
                                  mcp_pubkey='npub...',
                                  nwc_str='nostr+walletconnect://...')

# Convert MCP tools to Google tools
google_tools = await to_google_tools(nostr_mcp_client)

# Define Google agent
agent = Agent(
    name="google_agent",
    model=LiteLlm(
        model='gpt-4',
        api_base='https://api.routstr.com/v1',
        api_key='cashu...',
    ),
    instruction="You are a helpful assistant.",
    tools=google_tools,
)

# Session and Runner
session_service = InMemorySessionService()
runner = Runner(agent=agent, app_name='nostr_example', session_service=session_service)

# Define agent callable
async def agent_callable(input: ChatInput) -> str:
    content = types.Content(role='user', parts=[types.Part(text=input.messages[-1])])
    session = await session_service.create_session(app_name='nostr_example', user_id=input.thread_id, session_id=input.thread_id)
    events_async = runner.run_async(user_id=input.thread_id,
                                    session_id=input.thread_id,
                                    new_message=content)
    async for event in events_async:
        if event.is_final_response():
            final_response = event.content.parts[0].text
            return final_response
    return None

# Create Nostr Agent Server
server = NostrAgentServer(agent_callable=agent_callable,
                          nostr_mcp_client=nostr_mcp_client)

# Start server
await server.start()`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/nostr_google_agent.py">Google ADK Agent Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div id="nostr-rag" className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nostr RAG</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Agentstr SDK provides powerful RAG (Retrieval-Augmented Generation) capabilities integrated with Nostr. This allows you to build intelligent agents that can search and retrieve relevant information from Nostr notes.
              </p>
              <CodeBlock
                language="python"
                value={`from agentstr import NostrRAG
from langchain_openai import ChatOpenAI

# Get the environment variables
relays   = ['wss://some.relay']
llm_base_url = 'https://api.routstr.com/v1'
llm_api_key = 'cashu...'
llm_model_name = 'gpt-4'

# Define LLM
model = ChatOpenAI(temperature=0,
                   base_url=llm_base_url,
                   api_key=llm_api_key,
                   model_name=llm_model_name)

# Create the RAG instance
rag = NostrRAG(relays=relays,
               llm=model)

# Run a RAG query
result = await rag.query(question="What's new with Bitcoin?")
print(result)`}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                For a complete working example, see the <a className="text-primary hover:text-foreground" href="https://github.com/agentstr/agentstr-sdk/blob/main/examples/rag.py">RAG Example</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Next Steps</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Check out the <a href="/demo" className="text-primary hover:text-foreground">Demo</a> to see how Agentstr can be used in a real-world scenario.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Check out our <a href="/docs" className="text-primary hover:text-foreground">SDK Reference</a> for more details on each component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
