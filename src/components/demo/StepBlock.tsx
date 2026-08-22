import type { ReactNode } from 'react';
import type { StepItem, StepImage } from '@/data/geminiNotebookDemo';

interface StepBlockProps {
  id: string;
  number: number;
  title: string;
  body?: string;
  items?: StepItem[];
  children?: ReactNode;
  isLast?: boolean;
  image?: StepImage;
}

function StepBlock({
  id,
  number,
  title,
  body,
  items,
  children,
  isLast = false,
  image,
}: StepBlockProps) {
  return (
    <div id={id} className="relative scroll-mt-20 pl-14">
      {/* 縦線（最後のステップ以外） */}
      {!isLast && (
        <div
          className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-200"
          aria-hidden="true"
        />
      )}

      {/* 番号バッジ */}
      <div className="absolute left-0 top-0">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white text-base font-bold shrink-0">
          {number}
        </span>
      </div>

      {/* 右側コンテンツ */}
      <div className="pb-10">
        <h3 className="text-lg md:text-xl font-bold text-navy-dark mb-3">
          {title}
        </h3>

        {body && (
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
            {body}
          </p>
        )}

        {items && items.length > 0 && (
          <div className="space-y-4 mb-4">
            {items.map((item, index) => (
              <div key={index} className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <div className="flex gap-2">
                  <span className="text-lg font-bold text-navy-dark shrink-0">
                    {item.marker}
                  </span>
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                {item.notes && item.notes.length > 0 && (
                  <div className="mt-2 pl-7 space-y-1">
                    {item.notes.map((note, noteIndex) => (
                      <p
                        key={noteIndex}
                        className="text-sm text-gray-500 leading-relaxed"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {children}

        {image && (
          <div className="mt-4 rounded-lg border border-gray-200 overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default StepBlock;
