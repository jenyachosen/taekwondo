import { initialTicket } from '@/data';

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketsPage = ({ params }: TicketPageProps) => {
  const ticket = initialTicket.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
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