import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Home, Download } from 'lucide-react';
import { chatgptDemo as data } from '@/data/chatgptDemo';
import DemoPageHeader from '@/components/demo/DemoPageHeader';
import SectionBlock from '@/components/demo/SectionBlock';
import PromptBox from '@/components/demo/PromptBox';
import FileChip from '@/components/demo/FileChip';
import CalloutBox from '@/components/demo/CalloutBox';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 mb-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-base md:text-lg text-gray-700 leading-relaxed flex gap-2"
        >
          <span className="text-gray-400 shrink-0">・</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ChatGptPage() {
  return (
    <div>
      {/* 1. ページヘッダー */}
      <DemoPageHeader
        icon={MessageSquare}
        title={data.header.title}
        leadText={data.header.leadText}
      />

      {/* 2. 良い指示の4要素 */}
      <SectionBlock
        title={data.fourElements.title}
        subtitle={data.fourElements.subtitle}
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.fourElements.items.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white text-base font-bold shrink-0">
                  {item.number}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-navy-dark">
                  {item.title}
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed pl-12">
                例「{item.example}」
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 3. 注意点 */}
      <SectionBlock title={data.cautions.title} background="gray">
        <CalloutBox items={data.cautions.items} />
      </SectionBlock>

      {/* 4. デモで使用するファイル */}
      <SectionBlock title={data.files.title} background="white">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {data.files.description}
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {data.files.items.map((file) => (
            <FileChip key={file.name} fileName={file.name} label={file.label} />
          ))}
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
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

      {/* 5. デモ1：良くない依頼 */}
      <SectionBlock title={data.demo1.title} background="gray">
        <PromptBox text={data.demo1.prompt} variant="bad" />
        <div className="mt-5 rounded-lg bg-white border border-gray-200 p-5">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
            <span className="font-semibold text-navy-dark">解説：</span>
            {data.demo1.explanation.intro}
          </p>
          <BulletList items={data.demo1.explanation.bullets} />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {data.demo1.explanation.closing}
          </p>
        </div>
      </SectionBlock>

      {/* 6. デモ2：良い依頼 */}
      <SectionBlock title={data.demo2.title} background="white">
        <p className="text-lg text-gray-700 leading-relaxed mb-5">
          {data.demo2.leadText}
        </p>
        <PromptBox text={data.demo2.prompt} variant="good" />
        <div className="mt-5 rounded-lg bg-gray-50 border border-gray-200 p-5">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
            <span className="font-semibold text-navy-dark">解説：</span>
            {data.demo2.explanation.intro}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
            {data.demo2.explanation.intro2}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
            {data.demo2.explanation.intro3}
          </p>
          <BulletList items={data.demo2.explanation.bullets} />
          <p className="text-base md:text-lg font-bold text-navy-dark leading-relaxed">
            {data.demo2.explanation.closing}
          </p>
        </div>
      </SectionBlock>

      {/* 7. デモ3：参考となるデータファイルがある場合 */}
      <SectionBlock title={data.demo3.title} background="gray">
        <p className="text-lg text-gray-700 leading-relaxed mb-5">
          {data.demo3.leadText}
        </p>
        <PromptBox text={data.demo3.prompt} variant="good" />
        <div className="mt-5 rounded-lg bg-white border border-gray-200 p-5">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
            <span className="font-semibold text-navy-dark">解説：</span>
            {data.demo3.explanation.intro}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {data.demo3.explanation.intro2}
          </p>
        </div>
        <div className="mt-5">
          <CalloutBox
            title={data.demo3.callout.title}
            items={data.demo3.callout.items}
          />
        </div>
      </SectionBlock>

      {/* 8. ポイントまとめ */}
      <SectionBlock
        title={data.comparison.title}
        subtitle={data.comparison.subtitle}
        background="white"
      >
        <div className="overflow-hidden rounded-xl border border-gray-200">
          {/* ヘッダー行 */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-navy-dark text-white">
            <div className="px-4 py-3 text-sm md:text-base font-semibold">
              比較観点
            </div>
            <div className="px-4 py-3 text-sm md:text-base font-semibold border-t md:border-t-0 md:border-l border-white/20">
              {data.comparison.leftLabel}
            </div>
            <div className="px-4 py-3 text-sm md:text-base font-semibold border-t md:border-t-0 md:border-l border-white/20">
              {data.comparison.rightLabel}
            </div>
          </div>
          {/* データ行 */}
          {data.comparison.rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-3 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="px-4 py-4 text-sm md:text-base font-semibold text-navy-dark border-t border-gray-200">
                {row.viewpoint}
              </div>
              <div className="px-4 py-4 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-200">
                {row.left}
              </div>
              <div className="px-4 py-4 text-sm md:text-base text-gray-800 leading-relaxed border-t border-gray-200">
                {row.right}
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 9. ページ下部 */}
      <section className="py-10 md:py-12 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

export default ChatGptPage;
