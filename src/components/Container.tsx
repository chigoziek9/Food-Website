// src/components/Container.tsx
interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-container mx-auto px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
