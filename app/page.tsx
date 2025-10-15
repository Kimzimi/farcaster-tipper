'use client';

import { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect, useSendTransaction, useWaitForTransactionReceipt, useSwitchChain } from 'wagmi';
import { parseEther, encodeFunctionData } from 'viem';
import { base } from 'wagmi/chains';
import sdk from '@farcaster/frame-sdk';

interface FrameContext {
  user?: {
    fid?: number;
    username?: string;
  };
}

// DEGEN token on Base
const DEGEN_ADDRESS = '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed' as const;
const DEGEN_ABI = [
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext | null>(null);
  const [tipAmount, setTipAmount] = useState(100);
  const [recipientAddress, setRecipientAddress] = useState('');

  // Wagmi hooks
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const { data: hash, sendTransaction, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    const load = async () => {
      try {
        await sdk.actions.ready();
        const ctx = await sdk.context;
        setContext(ctx as FrameContext);
        setIsSDKLoaded(true);
      } catch (error) {
        console.error('Failed to initialize SDK:', error);
        setIsSDKLoaded(true); // Allow to continue even if SDK fails
      }
    };
    load();
  }, []);

  // Auto-switch to Base when connected
  useEffect(() => {
    if (isConnected && chain && chain.id !== base.id && switchChain) {
      switchChain({ chainId: base.id });
    }
  }, [isConnected, chain, switchChain]);

  const handleConnect = async (connector: typeof connectors[0]) => {
    try {
      await connect({ connector, chainId: base.id });
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  const handleTip = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    if (!recipientAddress) {
      alert('Please enter recipient address');
      return;
    }

    if (chain && chain.id !== base.id) {
      alert('Please switch to Base network');
      if (switchChain) {
        switchChain({ chainId: base.id });
      }
      return;
    }

    try {
      const data = encodeFunctionData({
        abi: DEGEN_ABI,
        functionName: 'transfer',
        args: [recipientAddress as `0x${string}`, parseEther(tipAmount.toString())],
      });

      sendTransaction({
        to: DEGEN_ADDRESS,
        data,
        chainId: base.id,
      });
    } catch (error) {
      console.error('Tip failed:', error);
      alert('Failed to send tip. Check console for details.');
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

        {/* Farcaster User Info */}
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

        {/* Wallet Connection Status */}
        <div className="mb-6">
          {!isConnected ? (
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
                🔗 Connect Your Wallet to Send Tips
              </p>
              <div className="space-y-2">
                {connectors.map((connector) => (
                  <button
                    key={connector.uid}
                    onClick={() => handleConnect(connector)}
                    disabled={!connector.ready}
                    className="w-full py-4 px-6 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span className="text-2xl">
                      {connector.name === 'Coinbase Wallet' && '🔵'}
                      {connector.name === 'MetaMask' && '🦊'}
                      {connector.name === 'WalletConnect' && '🌐'}
                      {!['Coinbase Wallet', 'MetaMask', 'WalletConnect'].includes(connector.name) && '👛'}
                    </span>
                    Connect {connector.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-xs text-gray-600 mb-1">Connected Wallet</div>
                    <div className="font-mono text-sm font-semibold text-gray-800">
                      {address?.slice(0, 8)}...{address?.slice(-6)}
                    </div>
                  </div>
                  <button
                    onClick={() => disconnect()}
                    className="text-xs bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 font-semibold"
                  >
                    Disconnect
                  </button>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <div className="text-xs text-gray-600">Network</div>
                  <div className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    chain?.id === base.id
                      ? 'bg-green-200 text-green-800'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {chain?.id === base.id ? '✓ Base Mainnet' : chain?.name || 'Unknown'}
                  </div>
                </div>
                {chain && chain.id !== base.id && switchChain && (
                  <button
                    onClick={() => switchChain({ chainId: base.id })}
                    className="w-full mt-3 py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600"
                  >
                    Switch to Base Network
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Recipient Address - Only show when connected */}
        {isConnected && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recipient Address
            </label>
            <input
              type="text"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder="0x..."
              className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none font-mono text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter the wallet address to send DEGEN tokens
            </p>
          </div>
        )}

        {/* Tip Amount Selector - Only show when connected */}
        {isConnected && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Tip Amount (DEGEN)
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
                min="1"
              />
            </div>
          </div>
        )}

        {/* Tip Button - Only show when connected */}
        {isConnected && (
          <button
            onClick={handleTip}
            disabled={isConfirming || isPending || !recipientAddress || chain?.id !== base.id}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
              isConfirmed
                ? 'bg-green-500 text-white'
                : isConfirming || isPending
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : !recipientAddress || chain?.id !== base.id
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105'
            }`}
          >
            {isConfirmed ? (
              <span className="flex items-center justify-center">
                <span className="mr-2">✓</span> Tip Sent Successfully!
              </span>
            ) : isConfirming ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin mr-2">⏳</span> Confirming on Chain...
              </span>
            ) : isPending ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin mr-2">⏳</span> Waiting for Approval...
              </span>
            ) : chain?.id !== base.id ? (
              'Please Switch to Base Network'
            ) : !recipientAddress ? (
              'Enter Recipient Address'
            ) : (
              `✨ Send ${tipAmount} $DEGEN`
            )}
          </button>
        )}

        {/* Transaction Hash */}
        {hash && (
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
            <p className="text-xs font-semibold text-gray-700 mb-2">Transaction Submitted:</p>
            <a
              href={`https://basescan.org/tx/${hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-600 hover:text-blue-800 hover:underline break-all block"
            >
              {hash}
            </a>
            <a
              href={`https://basescan.org/tx/${hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 font-semibold"
            >
              View on BaseScan →
            </a>
          </div>
        )}

        {/* Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p className="font-semibold">💡 How it works:</p>
          <p className="mt-1">1. Connect your wallet</p>
          <p>2. Enter recipient address & amount</p>
          <p>3. Send DEGEN tokens on Base chain</p>
          <p className="mt-3 text-purple-600 font-semibold">Support creators you love! 💜</p>
        </div>
      </div>
    </div>
  );
}
