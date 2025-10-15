import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { base } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

// DEGEN token contract address on Base
export const DEGEN_CONTRACT_ADDRESS = '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed';

// DEGEN token ABI (minimal for transfer)
export const DEGEN_ABI = [
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
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// Initialize clients
export const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});

export function createTipWalletClient(privateKey: `0x${string}`) {
  const account = privateKeyToAccount(privateKey);

  return createWalletClient({
    account,
    chain: base,
    transport: http(),
  });
}

// Get DEGEN balance
export async function getDegenBalance(address: `0x${string}`) {
  try {
    const balance = await publicClient.readContract({
      address: DEGEN_CONTRACT_ADDRESS,
      abi: DEGEN_ABI,
      functionName: 'balanceOf',
      args: [address],
    });
    return balance;
  } catch (error) {
    console.error('Error fetching DEGEN balance:', error);
    return BigInt(0);
  }
}

// Send DEGEN tip
export async function sendDegenTip(
  privateKey: `0x${string}`,
  recipientAddress: `0x${string}`,
  amount: number
) {
  try {
    const walletClient = createTipWalletClient(privateKey);

    // Convert amount to token units (DEGEN has 18 decimals)
    const amountInWei = parseEther(amount.toString());

    // Simulate the transaction first
    const { request } = await publicClient.simulateContract({
      account: walletClient.account,
      address: DEGEN_CONTRACT_ADDRESS,
      abi: DEGEN_ABI,
      functionName: 'transfer',
      args: [recipientAddress, amountInWei],
    });

    // Send the transaction
    const hash = await walletClient.writeContract(request);

    // Wait for confirmation
    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    return {
      success: true,
      hash,
      receipt,
    };
  } catch (error) {
    console.error('Error sending DEGEN tip:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Lookup Farcaster user's verified address
export async function getFarcasterUserAddress(fid: number): Promise<`0x${string}` | null> {
  try {
    // This is a placeholder - in production you would use:
    // 1. Neynar API: https://docs.neynar.com/
    // 2. Airstack API: https://docs.airstack.xyz/
    // 3. Or direct Farcaster Hub calls

    // For now, return a demo address
    // In production, fetch from Farcaster API
    console.log(`Looking up address for FID: ${fid}`);

    // Example using Neynar API (you'd need an API key):
    // const response = await fetch(`https://api.neynar.com/v2/farcaster/user/bulk?fids=${fid}`, {
    //   headers: {
    //     'api_key': process.env.NEYNAR_API_KEY!
    //   }
    // });
    // const data = await response.json();
    // return data.users[0]?.verified_addresses?.eth_addresses?.[0] || null;

    return null;
  } catch (error) {
    console.error('Error fetching user address:', error);
    return null;
  }
}
