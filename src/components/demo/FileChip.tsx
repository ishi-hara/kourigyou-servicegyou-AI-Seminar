import { FileText } from 'lucide-react';

interface FileChipProps {
  fileName: string;
  label?: string;
}

function FileChip({ fileName, label }: FileChipProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
      <FileText className="w-5 h-5 text-navy shrink-0" />
      <div className="flex flex-col">
        <span className="text-sm md:text-base font-medium text-navy-dark break-all">
          {fileName}
        </span>
        {label && <span className="text-xs text-gray-500">{label}</span>}
      </div>
    </div>
  );
}

export default FileChip;
