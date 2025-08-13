import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResearchCardProps {
  title: string;
  conference: string;
  location: string;
  publisher: string;
  date: string;
  description: string;
  type: string;
}

export function ResearchCard({
  title,
  conference,
  location,
  publisher,
  date,
  description,
  type,
}: ResearchCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base font-semibold leading-tight">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{conference}</p>
            <p className="text-xs text-muted-foreground">{location}</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {date}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {publisher}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {type}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
