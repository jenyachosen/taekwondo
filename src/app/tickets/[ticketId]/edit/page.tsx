import { notFound } from 'next/navigation';
import { CardCompact } from '@/components/card-compact';
import { TicketUpdateForm } from '@/features/ticket/components/ticket-update-form';
import { getTicket } from '@/features/ticket/queries/get-ticket';

type TicketEditPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const ticket = await getTicket(params.ticketId);

  if (!ticket) {
    return notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title={ticket.title}
        className="w-full max-w-[420px] animate-fade-in-from-top"
        description="Some Descr"
        content={<TicketUpdateForm ticket={ticket} />}
      />
    </div>
  );
};

export default TicketEditPage;
