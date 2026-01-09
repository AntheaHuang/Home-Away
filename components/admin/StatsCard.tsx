import { Card, CardHeader } from "../ui/card";

type StatsCardProps = {
  title: string;
  value: number | string;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row justify-between items-center">
        <h3 className="capitalize text-2xl font-bold">{title}</h3>
        <span className="text-primary text-4xl font-bold">{value}</span>
      </CardHeader>
    </Card>
  );
}
