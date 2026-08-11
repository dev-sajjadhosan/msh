import Header from "@/components/custom/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between font-mono max-w-4xl mx-auto h-full p-15">
      <Header />
      <Avatar className="h-24 w-24 mt-15">
        <AvatarImage src={"https://github.com/shadcn.png"} alt="shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
