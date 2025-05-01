export default function Pricing() {
  return (
    <section className="bg-[url('/bg-dot.png')] bg-repeat p-0">
      <div className="min-h-screen text-black px-6 py-12 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          One Solution for Every Research Need
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Free Plan */}
          <div className="border rounded-xl shadow-sm p-4 w-full md:w-1/3 bg-white">
            <h3 className="text-lg font-semibold mb-2">Free</h3>
            <p className="text-3xl font-bold">
              $0<span className="text-base font-normal">/month</span>
            </p>
            <button className="w-full mt-4 mb-6 border py-2 rounded-md transition-all duration-300 hover:bg-[#00BFA6] hover:text-white hover:shadow-md cursor-pointer">
              Current Plan
            </button>

            <ul className="space-y-2 text-sm">
              <li>✔️ 10 AI Generations / day</li>
              <li>✔️ Premium AI models (GPT-4, GPT-4o, Claude 3.5)</li>
              <li>✔️ 500MB Storage</li>
            </ul>
          </div>

          {/* Starter Plan */}
          <div className="border rounded-xl shadow-sm p-4 w-full md:w-1/3 bg-white">
            <h3 className="text-lg font-semibold mb-2">Starter</h3>
            <p className="text-3xl font-bold">
              $10<span className="text-base font-normal">/month</span>
            </p>
            <button className="w-full mt-4 mb-6 bg-black text-white py-2 rounded-md transition-all duration-300 transform hover:bg-[#00BFA6] hover:text-black  hover:shadow-lg cursor-pointer">
              Upgrade Now
            </button>

            <ul className="space-y-2 text-sm">
              <li>✔️ Unlimited AI Generations</li>
              <li>✔️ Premium AI models (GPT-4, GPT-4o, Claude 3.7)</li>
              <li>✔️ 5GB Storage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
