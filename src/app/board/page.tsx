import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const boardMembers = [
    {
      name: "Mrs. Emma Ofori Agyeman",
      title: "Chairperson",
      imageUrl: "https://picsum.photos/seed/board-1/200/200",
    },
    {
      name: "Mr. Isaac Bampoe Addo",
      title: "Member",
      imageUrl: "https://picsum.photos/seed/board-2/200/200",
    },
    {
      name: "Dr. Evans A. Dzikum",
      title: "Member",
      imageUrl: "https://picsum.photos/seed/board-3/200/200",
    },
    {
      name: "Mrs. Rhodaline Amoako-Mensah",
      title: "Member",
      imageUrl: "https://picsum.photos/seed/board-4/200/200",
    },
    {
      name: "Mr. Longman Attakumah",
      title: "Member",
      imageUrl: "https://picsum.photos/seed/board-5/200/200",
    },
    {
      name: "Mr. Benjamin Otoo",
      title: "Member",
      imageUrl: "https://picsum.photos/seed/board-6/200/200",
    },
    {
        name: "Mr. Alfred Nortey",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-7/200/200",
    },
    {
        name: "Mr. Noah Tumfo",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-8/200/200",
    },
    {
        name: "Mr. Samuel Collison",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-9/200/200",
    },
    {
        name: "Mr. Emmanuel Acquah",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-10/200/200",
    },
    {
        name: "Mr. Kofi Boateng Achampong",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-11/200/200",
    },
    {
        name: "Mr. Forster Akpoka",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-12/200/200",
    },
    {
        name: "Mr. Sylvester Williams",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-13/200/200",
    },
    {
        name: "Mr. James Oppong-Mensah",
        title: "Member",
        imageUrl: "https://picsum.photos/seed/board-14/200/200",
    },
    {
        name: "Mr. Ransford A. Dankyira",
        title: "Independent Trustee",
        imageUrl: "https://picsum.photos/seed/board-15/200/200",
    },
];

export default function BoardPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 text-primary">
          Meet the Board of Trustees
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Our dedicated board of trustees brings a wealth of experience and expertise to guide our mission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {boardMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
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
