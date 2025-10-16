import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, parseEther } from 'viem';
import { base } from 'viem/chains';

const DEGEN_ADDRESS = '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed';
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { untrustedData } = body;

    // Get recipient address from untrusted data (would need to be set)
    // For now, use a default address - you'll need to implement address selection
    const recipientAddress = '0x0000000000000000000000000000000000000000'; // Replace with actual logic

    const data = encodeFunctionData({
      abi: DEGEN_ABI,
      functionName: 'transfer',
      args: [recipientAddress as `0x${string}`, parseEther('100')],
    });

    return NextResponse.json({
      chainId: `eip155:${base.id}`,
      method: 'eth_sendTransaction',
      params: {
        abi: DEGEN_ABI,
        to: DEGEN_ADDRESS,
        data,
        value: '0',
      },
    });
  } catch (error) {
    console.error('Transaction error:', error);
    return NextResponse.json({ error: 'Transaction failed' }, { status: 500 });
  }
}
