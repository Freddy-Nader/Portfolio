/**
 * A table component with responsive horizontal scrolling and consistent styling.
 * @param children - The table content (thead, tbody, etc.).
 * @param className - Additional CSS classes to apply.
 * @returns {React.ReactElement} A styled table component.
 */
export function Table({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <table className={`overflow-x-auto w-full border-collapse mt-4 text-[0.95rem] ${className}`}>
      {children}
    </table>
  );
}

/**
 * A table header component for wrapping table header content.
 * @param children - The header content.
 * @param className - Additional CSS classes to apply.
 * @returns {React.ReactElement} A table header element.
 */
export function THead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <thead className={`${className}`}>
      {children}
    </thead>
  );
}

/**
 * A table body component for wrapping table row content.
 * @param children - The body content (table rows).
 * @param className - Additional CSS classes to apply.
 * @returns {React.ReactElement} A table body element.
 */
export function TBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tbody className={`${className}`}>
      {children}
    </tbody>
  );
}

/**
 * A table data cell component with consistent styling and alignment.
 * @param children - The cell content.
 * @param className - Additional CSS classes to apply.
 * @returns {React.ReactElement} A table data cell element.
 */
export function TD({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`py-2 text-[var(--text-secondary)] align-top last:text-right last:whitespace-nowrap last:pl-4 last:tabular-nums ${className}`}>
      {children}
    </td>
  );
}

/**
 * A table header cell component with bold styling and bottom border.
 * @param children - The header cell content.
 * @param className - Additional CSS classes to apply.
 * @returns {React.ReactElement} A table header cell element.
 */
export function TH({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`text-left text-[var(--text-primary)] font-medium pb-2 border-b border-[var(--border)] last:text-right last:whitespace-nowrap last:pl-4 last:tabular-nums ${className}`}>
      {children}
    </th>
  );
}

/**
 * A table row component for wrapping table cells.
 * @param children - The row content (table cells).
 * @param className - Additional CSS classes to apply.
 * @returns {React.ReactElement} A table row element.
 */
export function TR({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
}
