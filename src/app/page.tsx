'use client';

import { useState } from 'react';

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        alert('MetaMask not found. Please install it.');
        return;
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Connect Web3 Wallet</h1>
        <button
          onClick={connectWallet}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-md transition"
        >
          {account ? 'Wallet Connected' : 'Connect Wallet'}
        </button>
        {account && (
          <p className="mt-6 text-sm break-words bg-gray-800 p-4 rounded-md">
            Connected Address:<br /> <span className="text-emerald-300">{account}</span>
          </p>
        )}
      </div>
    </main>
  );
}
