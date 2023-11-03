import { classNames } from '@/utils/classNames';

type ProtectedPageProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Page({ children, className = '' }: ProtectedPageProps) {
  return (
    <div className={classNames('flex flex-col w-full h-full grow', className)}>
      {children}
    </div>
  );
}
