export function Table({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <table className={`overflow-x-auto w-full border-collapse mt-4 text-[0.95rem]`}>
      {children}
    </table>
  );
}

export function THead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <thead className={`${className}`}>
      {children}
    </thead>
  );
}

export function TBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tbody className={`${className}`}>
      {children}
    </tbody>
  );
}

export function TD({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`py-2 text-[var(--text-secondary)] align-top last:text-right last:whitespace-nowrap last:pl-4 last:tabular-nums ${className}`}>
      {children}
    </td>
  );
}

export function TH({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`text-left text-[var(--text-primary)] font-medium pb-2 border-b border-[var(--border)] last:text-right last:whitespace-nowrap last:pl-4 last:tabular-nums ${className}`}>
      {children}
    </th>
  );
}

export function TR({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
}
