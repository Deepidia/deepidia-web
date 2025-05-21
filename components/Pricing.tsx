export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[url('/bg-dot.png')] bg-repeat mt-12 mb-6 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 lg:py-24"
    >
      <div className="text-black">
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl font-bold text-center mb-10 leading-snug"
        >
          One Solution for Every Research Need
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Free Plan */}
          <div
            data-aos="fade-right"
            className="border rounded-xl shadow-sm p-6 sm:p-8 w-full max-w-md mx-auto md:mx-0 md:w-1/3 bg-white"
          >
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
          <div
            data-aos="fade-left"
            className="border rounded-xl shadow-sm p-6 sm:p-8 w-full max-w-md mx-auto md:mx-0 md:w-1/3 bg-white"
          >
            <h3 className="text-lg font-semibold mb-2">Starter</h3>
            <p className="text-3xl font-bold">
              $10<span className="text-base font-normal">/month</span>
            </p>
            <button className="w-full mt-4 mb-6 bg-black text-white py-2 rounded-md transition-all duration-300 hover:bg-[#00BFA6] hover:text-black hover:shadow-lg cursor-pointer">
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
