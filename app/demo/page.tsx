import VideoPlayer from "../../components/VideoPlayer";
import PDFViewer from "../../components/PDFViewer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import DecentralizedAINetwork3D from "../../components/DecentralizedAINetwork3D";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="w-full sm:max-w-7xl sm:mx-auto px-2 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Demo</span>
            <span className="block text-primary">Agentstr SDK</span>
          </h1>
          <p className="mt-3 text-base text-gray-700 dark:text-gray-300 max-w-xl sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl leading-relaxed">
            Watch our demo video and view the presentation slides to learn more about Agentstr.
          </p>
        </div>
        <div className="mt-12 w-full sm:max-w-4xl sm:mx-auto">
          <div className="bg-white glass-panel-light dark:bg-transparent glass-panel border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Demo Video</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Watch the demo video to see Agentstr in action:</p>
              <VideoPlayer
                src="https://www.youtube.com/embed/xIykZFM-QhQ?si=y4CXUYFTI6Fh7E-9"
                title="Agentstr Demo"
                className="mb-4"
              />
              <a
                href="https://github.com/ehallmark/agentstr-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-accent text-sm font-medium rounded-md bg-white text-accent shadow-sm hover:bg-accent hover:text-white transition-colors duration-200 dark:bg-accent dark:text-white dark:border-transparent dark:hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                <span className="flex items-center">
                  View Demo in GitHub
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-16 w-full sm:max-w-4xl sm:mx-auto">
          <div className="bg-white glass-panel-light dark:bg-transparent glass-panel border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Slide Deck</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">View the slide deck to learn more about the motivation behind Agentstr:</p>
              <PDFViewer
                src="https://drive.google.com/file/d/1Dc6_pRQ2fQMge14HrB20zMXe81z_XNsc/preview"
                title="Agentstr Presentation"
                className="mb-4"
              />
              <a
                href="https://drive.google.com/file/d/1Dc6_pRQ2fQMge14HrB20zMXe81z_XNsc/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-accent text-sm font-medium rounded-md bg-white text-accent shadow-sm hover:bg-accent hover:text-white transition-colors duration-200 dark:bg-accent dark:text-white dark:border-transparent dark:hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                <span className="flex items-center">
                  View Deck in Drive
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </span>
              </a>    
            </div>         
          </div>
        </div>

        <div className="mt-12 w-full sm:max-w-4xl sm:mx-auto">
          <div className="bg-white glass-panel-light dark:bg-transparent glass-panel border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">3D Decentralized AI Network</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Visualization of a decentralized autonomous AI network. Node colors: <span style={{color:'#3498db'}}>users</span>, <span style={{color:'#2ecc40'}}>agents</span>, <span style={{color:'#9b59b6'}}>tools</span>. Lightning edges represent payment zaps.
              </p>
              <DecentralizedAINetwork3D />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
