import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface PromptBoxProps {
  text: string;
  variant?: 'good' | 'bad';
  scrollable?: boolean;
}

function PromptBox({ text, variant = 'good', scrollable = false }: PromptBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  const variantClass =
    variant === 'good'
      ? 'border-l-4 border-l-green-500 bg-green-50/50'
      : 'border-l-4 border-l-red-400 bg-red-50/40';

  const label = variant === 'good' ? '良い指示の例' : '良くない指示の例';
  const labelClass = variant === 'good' ? 'text-green-700' : 'text-red-600';

  return (
    <div className={`rounded-lg border border-gray-200 ${variantClass} p-5 md:p-6`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-sm font-semibold ${labelClass}`}>{label}</span>
        <div className="flex items-center gap-3">
          {scrollable && (
            <span className="text-xs text-gray-400">スクロールできます</span>
          )}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy-dark transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">コピーしました</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>コピー</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className={scrollable ? 'max-h-[32rem] overflow-y-auto' : ''}>
        <p className="whitespace-pre-wrap text-base md:text-lg leading-relaxed text-gray-800 font-mono">
          {text}
        </p>
      </div>
    </div>
  );
}

export default PromptBox;
