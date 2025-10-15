'use client';

import { useEffect, useState } from 'react';
import sdk from '@farcaster/frame-sdk';

interface FrameContext {
  user?: {
    fid?: number;
    username?: string;
  };
}

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext | null>(null);
  const [tipAmount, setTipAmount] = useState(100);
  const [isTipping, setIsTipping] = useState(false);
  const [tipSuccess, setTipSuccess] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        await sdk.actions.ready();
        const ctx = await sdk.context;
        setContext(ctx as FrameContext);
        setIsSDKLoaded(true);
      } catch (error) {
        console.error('Failed to initialize SDK:', error);
      }
    };
    load();
  }, []);

  const handleTip = async () => {
    if (!context?.user?.fid) return;

    setIsTipping(true);
    try {
      // Simulate tip transaction
      await new Promise(resolve => setTimeout(resolve, 1500));
      setTipSuccess(true);

      // Show success for 2 seconds then reset
      setTimeout(() => {
        setTipSuccess(false);
        setIsTipping(false);
      }, 2000);
    } catch (error) {
      console.error('Tip failed:', error);
      setIsTipping(false);
    }
  };

  if (!isSDKLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
        <div className="text-white text-2xl font-bold animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Karma Tipper
          </h1>
          <p className="text-gray-600">
            Support great content with crypto tips
          </p>
        </div>

        {/* User Info */}
        {context?.user && (
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {context.user.username?.[0]?.toUpperCase() || '?'}
              </div>
              <div>
                <div className="font-semibold text-gray-800">
                  @{context.user.username || 'Anonymous'}
                </div>
                <div className="text-sm text-gray-600">
                  FID: {context.user.fid}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tip Amount Selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Select Tip Amount
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[100, 250, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => setTipAmount(amount)}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  tipAmount === amount
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {amount}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <input
              type="number"
              value={tipAmount}
              onChange={(e) => setTipAmount(Number(e.target.value))}
              className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none font-semibold"
              placeholder="Custom amount"
            />
          </div>
        </div>

        {/* Tip Button */}
        <button
          onClick={handleTip}
          disabled={isTipping || tipSuccess}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
            tipSuccess
              ? 'bg-green-500 text-white'
              : isTipping
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105'
          }`}
        >
          {tipSuccess ? (
            <span className="flex items-center justify-center">
              <span className="mr-2">✓</span> Tip Sent!
            </span>
          ) : isTipping ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin mr-2">⏳</span> Sending...
            </span>
          ) : (
            `✨ Tip ${tipAmount} $DEGEN`
          )}
        </button>

        {/* Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Tips are sent on Base chain</p>
          <p className="mt-1">Support creators you love! 💜</p>
        </div>
      </div>
    </div>
  );
}
