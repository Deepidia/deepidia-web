export default function IdeaResult() {
  return (
    <div className="border rounded-xl p-6 mb-4 shadow-sm bg-white w-full">
      <h3 className="font-semibold text-sm md:text-base text-black">
        Title One of The Colonialism
      </h3>
      <p className="text-sm text-gray-700 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis in
        sapien a bibendum. Duis finibus elit in ante fermentum, vel volutpat
        risus tincidunt. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos.
      </p>
      <div className="mt-4 text-sm text-gray-600">
        <strong className="block text-xs mb-1">Topic Fields</strong>
        Technology, AI
      </div>
      <div className="mt-4">
        <button className="bg-gray-100 px-4 py-1 text-gray-500 text-sm rounded-full hover:bg-gray-200 border border-gray-300">
          Trending Now
        </button>
      </div>
    </div>
  );
}
