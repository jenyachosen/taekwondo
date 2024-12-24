import Link from 'next/link';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialTicket } from '@/data';
import { ticketsPath } from '@/paths';

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketsPage = ({ params }: TicketPageProps) => {
  const ticket = initialTicket.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <div>{ticket.status}</div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
};

export default TicketsPage;
