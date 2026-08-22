interface FileTreeProps {
  tree: string;
  caption?: string;
}

function FileTree({ tree, caption }: FileTreeProps) {
  return (
    <div>
      <div className="overflow-x-auto rounded-lg bg-navy-dark p-5 md:p-6">
        <pre className="whitespace-pre leading-relaxed text-sm md:text-base font-mono text-gray-100">
          {tree}
        </pre>
      </div>
      {caption && (
        <p className="text-sm text-gray-500 leading-relaxed mt-3">{caption}</p>
      )}
    </div>
  );
}

export default FileTree;
