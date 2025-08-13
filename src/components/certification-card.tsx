import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
}

export function CertificationCard({
  name,
  issuer,
  date,
}: CertificationCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base font-semibold">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{issuer}</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {date}
          </Badge>
        </div>
      </CardHeader>
    </Card>
  );
}
