import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center">
      <section className="w-full max-w-xl bg-gray-900 p-6 rounded-lg shadow-lg">
        
        {/* Heading + Badge */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
          <h2 className="text-3xl font-serif font-semibold text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="w-24"
          />
        </div>

        {/* Credential List */}
        <ul className="space-y-4 text-left text-platinum text-lg">
          <li className="flex items-start">
            <span className="text-silver mr-2">✔</span>
            Licensed & Bonded
          </li>
          <li className="flex items-start">
            <span className="text-silver mr-2">✔</span>
            Certified Signing Agent
          </li>
          <li className="flex items-start">
            <span className="text-silver mr-2">✔</span>
            Member of National Notary Association
          </li>
        </ul>
      </section>
    </main>
  );
}
