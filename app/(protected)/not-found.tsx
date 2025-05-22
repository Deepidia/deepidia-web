export default function ProtectedNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Not Found in Protected Area</h1>
      <p className="text-lg text-gray-600 mb-8">
        This protected page does not exist.
      </p>
      <a href="/protected/homepage" className="text-blue-500 underline">
        Go to your homepage
      </a>
    </div>
  );
}
