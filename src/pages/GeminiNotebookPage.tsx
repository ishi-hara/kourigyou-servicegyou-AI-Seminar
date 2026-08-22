import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ArrowLeft, Home, Download } from 'lucide-react';
import { geminiNotebookDemo as data } from '@/data/geminiNotebookDemo';
import DemoPageHeader from '@/components/demo/DemoPageHeader';
import SectionBlock from '@/components/demo/SectionBlock';
import PromptBox from '@/components/demo/PromptBox';
import CalloutBox from '@/components/demo/CalloutBox';
import FileChip from '@/components/demo/FileChip';
import StepBlock from '@/components/demo/StepBlock';
import SimpleTable from '@/components/demo/SimpleTable';

function GeminiNotebookPage() {
  const handleTocClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    stepId: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(stepId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* 1. ページヘッダー */}
      <DemoPageHeader
        icon={BookOpen}
        title={data.header.title}
        leadText={data.header.leadText}
      />

      {/* 2. Gemini Notebookとは */}
      <SectionBlock title={data.about.title} background="white">
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {data.about.note}
        </p>
        <div className="space-y-3 mb-6">
          {data.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
          <ul className="space-y-2">
            {data.about.bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex gap-2 text-base md:text-lg text-gray-700 leading-relaxed"
              >
                <span className="text-gray-400 shrink-0">・</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionBlock>

      {/* 3. デモで使用するファイル */}
      <SectionBlock title={data.files.title} background="gray">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          {data.files.description}
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {data.files.items.map((file) => (
            <FileChip key={file.name} fileName={file.name} label={file.label} />
          ))}
        </div>
        <div className="mb-6">
          <CalloutBox items={data.files.callout.items} />
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <a
            href={data.files.downloadLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-medium text-accent hover:text-accent-dark transition-colors"
          >
            <Download className="w-5 h-5" />
            {data.files.downloadLink.text}
          </a>
          <p className="text-sm text-gray-500 mt-2">
            {data.files.downloadLink.note}
          </p>
        </div>
      </SectionBlock>

      {/* 4. デモ手順 */}
      <SectionBlock title={data.stepsTitle} background="white">
        {/* 目次 */}
        <div className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-base font-semibold text-navy-dark mb-3">
            {data.stepsTocTitle}
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.steps.map((step) => (
              <li key={step.id}>
                <a
                  href={`#${step.id}`}
                  onClick={(e) => handleTocClick(e, step.id)}
                  className="inline-flex items-center gap-2 text-sm md:text-base text-navy hover:text-accent transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0">
                    {step.number}
                  </span>
                  <span className="underline-offset-2 hover:underline">
                    {step.title}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* 手順ブロック */}
        <div>
          {data.steps.map((step, index) => (
            <StepBlock
              key={step.id}
              id={step.id}
              number={step.number}
              title={step.title}
              body={step.body}
              items={step.items}
              isLast={index === data.steps.length - 1}
              image={step.image}
            >
              {step.prompt && <PromptBox text={step.prompt} variant="good" />}

              {step.note && (
                <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-4">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {step.note}
                  </p>
                </div>
              )}
            </StepBlock>
          ))}
        </div>
      </SectionBlock>

      {/* 5. 比較表 */}
      <SectionBlock title={data.comparison.title} background="gray">
        <SimpleTable
          headers={data.comparison.headers}
          rows={data.comparison.rows}
        />
        <p className="mt-6 text-lg md:text-xl font-bold text-accent-dark leading-relaxed">
          {data.comparison.emphasis}
        </p>
      </SectionBlock>

      {/* 6. ページ下部 */}
      <section className="py-10 md:py-12 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={data.footer.prevDemoPath}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white text-base font-medium hover:bg-white/20 transition-colors w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
              {data.footer.prevDemo}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white text-base font-medium hover:bg-white/20 transition-colors w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              {data.footer.backToHome}
            </Link>
            <Link
              to={data.footer.nextDemoPath}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-base font-medium hover:bg-accent-dark transition-colors w-full sm:w-auto justify-center"
            >
              {data.footer.nextDemo}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GeminiNotebookPage;
