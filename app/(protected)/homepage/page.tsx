import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'

export default async function Homepage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
  <main className="min-h-screen">
  <Header />
  <Hero />
  <Features />
  <Pricing />
  <Footer />
</main>
  )
}

//   return (
//     <div>
//       <h1>
//         Welcome, {session.user?.name}!
//       </h1>
//       <p>This is your protected homepage.</p>
//       <pre>{JSON.stringify(session, null, 2)}</pre>
//     </div>
//   );




