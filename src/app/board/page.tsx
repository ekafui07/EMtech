import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const boardMembers = [
  {
    name: "John Doe",
    title: "Chairman",
    imageUrl: "https://picsum.photos/seed/board-1/200/200",
  },
  {
    name: "Jane Smith",
    title: "CEO",
    imageUrl: "https://picsum.photos/seed/board-2/200/200",
  },
  {
    name: "Peter Jones",
    title: "Member",
    imageUrl: "https://picsum.photos/seed/board-3/200/200",
  },
  {
    name: "Mary Williams",
    title: "Member",
    imageUrl: "https://picsum.photos/seed/board-4/200/200",
  },
    {
    name: "David Brown",
    title: "Member",
    imageUrl: "https://picsum.photos/seed/board-5/200/200",
  },
    {
    name: "Sarah Taylor",
    title: "Member",
    imageUrl: "https://picsum.photos/seed/board-6/200/200",
  },
];

export default function BoardPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 text-primary">
          Meet the Board
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Our dedicated board of trustees brings a wealth of experience and expertise to guide our mission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                <p className="text-muted-foreground">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
