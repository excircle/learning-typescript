// Create a new layout component that wraps the children in a div with a class name of "nested-layout"

interface NestedLayoutProps {
    children: React.ReactNode;
}

export default function NestedLayout({ children }: NestedLayoutProps) {
    return (
        <div className="nested-layout">{children}</div>
    );
}

// Path: components/layout/layout.tsx
// Update the Layout component to include the NestedLayout component

