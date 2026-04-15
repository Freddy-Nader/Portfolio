"use client"

/**
 * A reusable table component that automatically adds a width of 100%, a border collapse, a margin top of 1rem, and a font size of 0.95rem.
 * Additionally, the table will automatically overflow horizontally if its content is too wide.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable table component with automatic styling.
 */
export function Table({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <table className={`overflow-x-auto w-full border-collapse mt-4 text-[0.95rem] ${className}`}>
      {children}
    </table>
  );
}

/**
 * A reusable thead component that wraps its children in a thead element.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable thead component with automatic styling.
 */
export function THead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <thead className={`${className}`}>
      {children}
    </thead>
  );
}

/**
 * A reusable tbody component that wraps its children in a tbody element.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable tbody component with automatic styling.
 */
export function TBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tbody className={`${className}`}>
      {children}
    </tbody>
  );
}

/**
 * A reusable td component that wraps its children in a td element.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable td component with automatic styling.
 */
export function TD({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`py-2 text-[var(--text-secondary)] align-top last:text-right last:whitespace-nowrap last:pl-4 last:tabular-nums ${className}`}>
      {children}
    </td>
  );
}

/**
 * A reusable th component that wraps its children in a th element.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable th component with automatic styling.
 */
export function TH({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`text-left text-[var(--text-primary)] font-medium pb-2 border-b border-[var(--border)] last:text-right last:whitespace-nowrap last:pl-4 last:tabular-nums ${className}`}>
      {children}
    </th>
  );
}

/**
 * A reusable tr component that wraps its children in a tr element.
 * @param {ReactNode} children - The children of the component.
 * @param {string} [className] - Additional CSS classes to be applied to the component.
 * @returns {React.ReactElement} A reusable tr component with automatic styling.
 */
export function TR({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
}
