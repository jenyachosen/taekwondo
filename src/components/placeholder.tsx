import { LucideMessageSquareWarning } from 'lucide-react';
import { cloneElement, ReactElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: ReactElement;
  button?: ReactElement;
};

const Placeholder: React.FC<PlaceholderProps> = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: 'w-16 h-16',
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: 'h-10',
      })}
    </div>
  );
};

export { Placeholder };
