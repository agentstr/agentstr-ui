import VideoPlayer from "../../components/VideoPlayer";
import PDFViewer from "../../components/PDFViewer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="w-full flex flex-col items-center px-0 py-8 md:py-16 gap-12">
        <header className="w-full max-w-4xl mx-auto text-center mb-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Agentstr <span className="block text-primary">Demo</span>
          </h1>
          <p className="mt-3 text-base text-gray-700 dark:text-gray-300 max-w-xl sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl leading-relaxed">
            Watch our demo video and view the slide deck to learn more about Agentstr.
          </p>
        </header>
        <section className="w-full flex flex-col mb-16 gap-14 items-stretch justify-center max-w-4xl mx-auto px-2">
          {/* Video Fullscreen Section */}
          <div className="flex-1 min-w-[320px] flex flex-col items-center justify-center">
            <h2 className="sr-only">Demo Video</h2>
            <VideoPlayer
              src="https://www.youtube.com/embed/QEPUsY_ZhO4?si=cFeha_eiVHArLsMF"
              title="Agentstr Demo"
              className="w-full h-[40vw] max-h-[480px] min-h-[240px] rounded-2xl shadow-none border-none bg-background"
            />
            <a
              href="https://github.com/ehallmark/agentstr-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View Code in GitHub
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          </div>
          {/* Slide Deck Fullscreen Section */}
          <div className="flex-1 min-w-[320px] flex flex-col items-center justify-center">
            <h2 className="sr-only">Slide Deck</h2>
            <PDFViewer
              src="https://drive.google.com/file/d/1Dc6_pRQ2fQMge14HrB20zMXe81z_XNsc/preview"
              title="Agentstr Presentation"
              className="w-full h-[40vw] max-h-[480px] min-h-[240px] rounded-2xl shadow-none border-none bg-background"
            />
            <a
              href="https://drive.google.com/file/d/1Dc6_pRQ2fQMge14HrB20zMXe81z_XNsc/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-semibold shadow hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              View Deck in Drive
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
