// import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/paths';
import { TICKET_ICONS } from '../constants';
import { getTicket } from '../queries/get-ticket';
import { getTickets } from '../queries/get-tickets';

type TicketItemProps = {
  ticket:
    | Awaited<ReturnType<typeof getTickets>>[number]
    | Awaited<ReturnType<typeof getTicket>>;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  if (!ticket) {
    return null;
  }

  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={ticketPath(ticket.id)} className="text-sm underline">
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx('w-full flex gap-x-2', {
        'max-w-[580px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': isDetail,
            })}
          >
            {ticket.content}
          </p>
        </CardContent>
      </Card>

      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export { TicketItem };
