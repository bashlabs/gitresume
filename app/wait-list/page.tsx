import { Header } from "@/components/header";
import Waitlist from "@/components/waitlist-section";

export default function WaitListPage() {
  return (
    <section className="min-h-screen bg-background container mx-auto">
      <Header />
      <main className="flex justify-center mt-0">
        <Waitlist />
      </main>
    </section>
  );
}
