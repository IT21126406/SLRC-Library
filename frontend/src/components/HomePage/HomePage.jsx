'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen flex-1 p-8 bg-gray-50 rounded-[16px]">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the SLRC Library System
        </h1>
        <p className="text-lg text-gray-600">
          Explore our vast collection of cassettes and resources. Manage your library activities with ease.
        </p>
      </div>

      {/* Quick Access Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Search Cassettes</h3>
            <p className="text-gray-600">Find cassettes by title, genre or producer.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Lend Cassette</h3>
            <p className="text-gray-600">Borrow cassettes from the library.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Return Items</h3>
            <p className="text-gray-600">Return borrowed items and manage late fees.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-medium text-gray-800 mb-2">View Reports</h3>
            <p className="text-gray-600">Generate and view library reports.</p>
          </div>
        </div>
      </div>

      {/* Footer (Optional) */}
      <footer className="mt-8 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Sri Lanka Rupavahini Corporation Library System. All rights reserved.</p>
      </footer>
    </div>
  );
}