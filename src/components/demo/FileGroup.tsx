import { Folder } from 'lucide-react';
import FileChip from '@/components/demo/FileChip';

interface FileGroupFile {
  name: string;
  label?: string;
}

interface FileGroupProps {
  folderName: string;
  files: FileGroupFile[];
}

function FileGroup({ folderName, files }: FileGroupProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Folder className="w-5 h-5 text-navy shrink-0" />
        <h3 className="text-base md:text-lg font-semibold text-navy-dark">
          {folderName}
        </h3>
      </div>
      <div className="flex flex-col gap-2 pl-7">
        {files.map((file) => (
          <FileChip key={file.name} fileName={file.name} label={file.label} />
        ))}
      </div>
    </div>
  );
}

export default FileGroup;
