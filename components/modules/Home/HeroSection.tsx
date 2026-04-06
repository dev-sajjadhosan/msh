import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex items-center bg-teal-500 w-full h-3"></div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col w-full">
          <h3 className="text-xl">Hey their!</h3>
          <h3 className="text-8xl font-mono">ME:</h3>
          <h1 className="text-6xl font-bold">Mohammad Sajjad Hosan.</h1>
          <h3 className="text-2xl mt-15">
            Frontend Developer & UI/UX Designer
          </h3>
        </div>
        <Card className="w-2xl">
          <CardContent>MSH</CardContent>
        </Card>
      </div>
    </section>
  );
}
