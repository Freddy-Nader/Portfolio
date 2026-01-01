export function Table({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`my-6 overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </table>
    </div>
  );
}

export function THead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <thead className={`bg-gray-50 dark:bg-gray-800 ${className}`}>
      {children}
    </thead>
  );
}

export function TBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tbody className={`bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700 ${className}`}>
      {children}
    </tbody>
  );
}

export function TD({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`px-6 py-4 text-sm text-gray-900 dark:text-gray-100 ${className}`}>
      {children}
    </td>
  );
}

export function TH({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider ${className}`}>
      {children}
    </th>
  );
}

export function TR({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tr className={`${className}`}>
      {children}
    </tr>
  );
}
