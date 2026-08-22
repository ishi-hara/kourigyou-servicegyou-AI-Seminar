import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft, Home } from 'lucide-react';
import { aiAgentDemo as data } from '@/data/aiAgentDemo';
import DemoPageHeader from '@/components/demo/DemoPageHeader';
import SectionBlock from '@/components/demo/SectionBlock';
import PromptBox from '@/components/demo/PromptBox';
import CalloutBox from '@/components/demo/CalloutBox';
import StepBlock from '@/components/demo/StepBlock';
import SimpleTable from '@/components/demo/SimpleTable';
import FileTree from '@/components/demo/FileTree';

function AiAgentPage() {
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
        icon={Terminal}
        title={data.header.title}
        leadText={data.header.leadText}
      />

      {/* 2. AIエージェントとは */}
      <SectionBlock title={data.about.title} background="white">
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
        {data.about.bullets.length > 0 && (
          <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 mb-6">
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
        )}
        <p className="text-lg md:text-xl font-bold text-accent-dark leading-relaxed">
          {data.about.emphasis}
        </p>
      </SectionBlock>

      {/* 3. ChatGPTとAIエージェントの違い */}
      <SectionBlock title={data.comparison.title} background="gray">
        <SimpleTable headers={data.comparison.headers} rows={data.comparison.rows} />
        {data.comparison.note && (
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
            {data.comparison.note}
          </p>
        )}
      </SectionBlock>

      {/* 4. デモのファイル構成 */}
      <SectionBlock title={data.fileStructure.title} background="white">
        <FileTree tree={data.fileStructure.tree} />
        {data.fileStructure.notes && data.fileStructure.notes.length > 0 && (
          <ul className="mt-4 space-y-2">
            {data.fileStructure.notes.map((note, index) => (
              <li
                key={index}
                className="flex gap-2 text-base md:text-lg text-gray-700 leading-relaxed"
              >
                <span className="text-gray-400 shrink-0">・</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}
      </SectionBlock>

      {/* 5. 各ファイルの内容 */}
      <SectionBlock title={data.fileContents.title} background="gray">
        <div className="space-y-5">
          {data.fileContents.blocks.map((block, blockIndex) => (
            <div
              key={blockIndex}
              className="rounded-lg bg-white border border-gray-200 p-5 md:p-6"
            >
              <h3 className="text-lg md:text-xl font-bold text-navy-dark mb-3">
                {block.title}
              </h3>
              {block.description && (
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  {block.description}
                </p>
              )}
              {block.paragraphs && (
                <div className="space-y-3">
                  {block.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base md:text-lg text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              {block.entries && (
                <div className="space-y-4">
                  {block.entries.map((entry, eIndex) => (
                    <div key={eIndex}>
                      <code className="inline-block font-mono text-sm md:text-base bg-gray-100 text-navy-dark px-2 py-1 rounded mb-2 break-all">
                        {entry.path}
                      </code>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed pl-1">
                        {entry.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {block.bullets && block.bullets.length > 0 && (
                <ul className="space-y-1.5 mt-4">
                  {block.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-2 text-base md:text-lg text-gray-700 leading-relaxed"
                    >
                      <span className="text-gray-400 shrink-0">・</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 6. デモ手順 */}
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
            >
              <div className="space-y-6">
                {step.prompt && (
                  <PromptBox text={step.prompt} variant="good" />
                )}

                {step.explanation && (
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
                    {step.explanation.intro && (
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                        <span className="font-semibold text-navy-dark">解説：</span>
                        {step.explanation.intro}
                      </p>
                    )}
                    {step.explanation.bullets &&
                      step.explanation.bullets.length > 0 && (
                        <ul className="space-y-1.5 mb-4">
                          {step.explanation.bullets.map((bullet, bIndex) => (
                            <li
                              key={bIndex}
                              className="text-base md:text-lg text-gray-700 leading-relaxed flex gap-2"
                            >
                              <span className="text-gray-400 shrink-0">・</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    {step.explanation.closing && (
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {step.explanation.closing}
                      </p>
                    )}
                  </div>
                )}

                {step.table && (
                  <SimpleTable
                    headers={step.table.headers}
                    rows={step.table.rows}
                  />
                )}

                {step.callout && <CalloutBox items={step.callout.items} />}

                {step.fileTree && (
                  <FileTree
                    tree={step.fileTree.tree}
                    caption={step.fileTree.caption}
                  />
                )}

                {step.referenceTitle && step.referenceItems && (
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-5">
                    <h4 className="text-base md:text-lg font-semibold text-navy-dark mb-3">
                      {step.referenceTitle}
                    </h4>
                    <ul className="space-y-2">
                      {step.referenceItems.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-2 text-sm md:text-base text-gray-700 leading-relaxed"
                        >
                          <span className="text-gray-400 shrink-0">・</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.noteParts && (
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
                      {step.noteParts.map((part, partIndex) =>
                        part.mono ? (
                          <code
                            key={partIndex}
                            className="font-mono bg-gray-200 text-navy-dark px-1.5 py-0.5 rounded text-sm"
                          >
                            {part.text}
                          </code>
                        ) : (
                          <span key={partIndex}>{part.text}</span>
                        ),
                      )}
                    </p>
                  </div>
                )}

                {step.note && !step.noteParts && (
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-wrap">
                      {step.note}
                    </p>
                  </div>
                )}
              </div>
            </StepBlock>
          ))}
        </div>
      </SectionBlock>

      {/* 7. AIエージェントをさらに発展させると */}
      <SectionBlock title={data.furtherDevelopment.title} background="gray">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          {data.furtherDevelopment.leadText}
        </p>
        <ul className="space-y-4 mb-6">
          {data.furtherDevelopment.items.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-gray-400 shrink-0 text-base md:text-lg">・</span>
              <div>
                <p className="font-semibold text-navy-dark text-base md:text-lg">
                  {item.name}
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-lg md:text-xl font-bold text-accent-dark leading-relaxed">
          {data.furtherDevelopment.emphasis}
        </p>
      </SectionBlock>

      {/* 8. ページ下部 */}
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiAgentPage;
