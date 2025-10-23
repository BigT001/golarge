import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Give | GoLarge',
  description: 'Support the mission — give online securely to GoLarge.',
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}