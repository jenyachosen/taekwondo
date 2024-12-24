import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';
import { buttonVariants } from './ui/button';

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 bg-background/95 backdrop-blur w-full flex justify-between py-2.5 px-5 border-b ">
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <LucideKanban />
          <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div>
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: 'default' })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export { Header };
