import { NextRequest, NextResponse } from 'next/server';
import { sendDegenTip, getFarcasterUserAddress } from '@/lib/degen';

export async function POST(request: NextRequest) {
  try {
    const { recipientFid, amount } = await request.json();

    // Validate input
    if (!recipientFid || !amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid recipient or amount' },
        { status: 400 }
      );
    }

    // Get recipient's address from Farcaster
    const recipientAddress = await getFarcasterUserAddress(recipientFid);

    if (!recipientAddress) {
      return NextResponse.json(
        { error: 'Could not find recipient address' },
        { status: 404 }
      );
    }

    // Get private key from environment
    const privateKey = process.env.WALLET_PRIVATE_KEY;

    if (!privateKey) {
      return NextResponse.json(
        { error: 'Wallet not configured' },
        { status: 500 }
      );
    }

    // Send the tip
    const result = await sendDegenTip(
      privateKey as `0x${string}`,
      recipientAddress,
      amount
    );

    if (result.success) {
      return NextResponse.json({
        success: true,
        hash: result.hash,
        message: `Successfully sent ${amount} DEGEN!`,
      });
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to send tip' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
