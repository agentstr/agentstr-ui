import VideoPlayer from "../../components/VideoPlayer";
import PDFViewer from "../../components/PDFViewer";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            <span className="block">Agentstr Demo</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Watch our demo video and view the presentation slides to learn more about Agentstr.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Demo Video</h2>
              <p className="text-gray-400 mb-4">Watch our demo video to see Agentstr in action:</p>
              <VideoPlayer
                src="https://drive.google.com/file/d/1vsxTBiYBr7qx813MvX-JXvGL2BfW4Sxx/preview"
                title="Agentstr Demo"
                className="mb-4"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">GitHub Repository</h2>
              <p className="text-gray-400 mb-4">Explore the code behind the demo:</p>
              <a
                href="https://github.com/ehallmark/nostr-ai-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-400 bg-indigo-900 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Slide Deck</h2>
              <p className="text-gray-400 mb-4">Check out the presentation slides:</p>
              <PDFViewer
                src="https://drive.google.com/file/d/1Dc6_pRQ2fQMge14HrB20zMXe81z_XNsc/preview"
                title="Agentstr Presentation"
                className="mb-4"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
