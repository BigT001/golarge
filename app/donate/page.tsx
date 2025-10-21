import DonateForm from "../components/DonateForm";
import Image from 'next/image';

export const metadata = {
  title: 'Give | GoLarge',
  description: 'Support the mission — give online securely to GoLarge.',
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Give Online</h1>
          <p className="mt-3 text-lg text-gray-300">Partner with our mission by making a one-time gift or set up recurring support.</p>
        </header>

       <div className="text-gray-200 ">
                  <p><strong>GIVE — You’re not losing; you’re planting</strong></p>

                  <p>There was once a farmer who loved his land. Every year, he planted his best seeds, not the leftovers. His neighbors often mocked him, saying, “Why waste the best? Keep the finest for yourself.”</p>

                  <p>But he always smiled and said, “I’m not losing seed; I’m planting a future.”</p>

                  <p>One year, a drought came. Fields all around him dried up, but his crops still grew — strong, green, and fruitful. His secret? The good seed he had sown in faith had deeper roots.</p>

                  <p>That’s how giving to God works. When you give, you’re not losing; you’re planting into soil that never fails. Every seed you release creates a future you cannot yet see — in opportunities, favor, peace, and generations to come.</p>

                  <blockquote className="border-l-4 border-white/20 pl-4 italic text-gray-100">As Jesus said in Luke 6:38, “Give, and it will be given to you; a good measure, pressed down, shaken together, and running over.”</blockquote>

                  <p>Your giving is not subtraction — it’s multiplication in disguise.</p>
                </div>


          {/* New: Giving Platforms image + narrative section */}
          <section className="mt-8 bg-black/50 rounded-2xl p-6 shadow-lg border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="flex items-center justify-center">
                {/* Replace /giving-platforms.png with the actual file in /public when available */}
                <a href="/giving-platforms.png" download className="block w-full max-w-md">
                  <Image src="/galleryimages/10.jpeg" alt="Giving Platforms" width={900} height={600} className="w-full h-auto rounded-lg shadow-lg" />
                </a>
                <p className="sr-only">Download bank and giving platform details</p>
              </div>

              <div>
               
                <DonateForm/>
              </div>
            </div>
          </section>

      </div>
    </main>
  );
}
