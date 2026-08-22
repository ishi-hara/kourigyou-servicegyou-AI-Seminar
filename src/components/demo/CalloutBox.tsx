import { AlertTriangle } from 'lucide-react';

interface CalloutBoxProps {
  title?: string;
  items: string[];
}

function CalloutBox({ title, items }: CalloutBoxProps) {
  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 md:p-6">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
        {title && (
          <h3 className="text-lg md:text-xl font-bold text-amber-800">{title}</h3>
        )}
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex gap-2 text-base md:text-lg text-amber-900 leading-relaxed"
          >
            <span className="text-amber-500 shrink-0">・</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalloutBox;
