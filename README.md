# ✨ Karma Tipper - Farcaster Miniapp

A Farcaster Frame miniapp that enables users to tip content creators with $DEGEN tokens on Base chain.

## 🎯 Features

- **Easy Tipping**: Send crypto tips to your favorite Farcaster creators
- **$DEGEN Token**: Built on Base chain with DEGEN token integration
- **Beautiful UI**: Clean, modern interface with gradient design
- **Frame Support**: Works as a Farcaster Frame for easy sharing
- **Customizable Amounts**: Choose preset amounts or enter custom tip values

## 🏗️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Farcaster Frame SDK** - Frame integration
- **Viem** - Ethereum library for blockchain interactions
- **Base Chain** - L2 network for fast, cheap transactions

## 📋 Prerequisites

- Node.js 18+ and npm
- A wallet with DEGEN tokens on Base chain
- Private key with DEGEN tokens (for sending tips)

## 🚀 Getting Started

### 1. Clone and Install

```bash
cd karma-tipper
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_URL=http://localhost:3000
WALLET_PRIVATE_KEY=0xyour_private_key_here
```

**Important**: The wallet associated with `WALLET_PRIVATE_KEY` should have DEGEN tokens to distribute as tips.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 How It Works

### For Users
1. Open the Karma Tipper frame in Farcaster
2. Select or enter a tip amount
3. Click "Tip" to send $DEGEN tokens
4. Transaction is processed on Base chain

### For Developers

The app uses:
- **Farcaster Frame SDK** to integrate with Farcaster clients
- **Viem** for blockchain interactions with Base
- **API Routes** to handle tip transactions securely
- **OpenGraph metadata** for Frame rendering

## 📁 Project Structure

```
karma-tipper/
├── app/
│   ├── api/
│   │   ├── og/          # Dynamic OG image generation
│   │   └── tip/         # Tip transaction API endpoint
│   ├── layout.tsx       # Root layout with Frame metadata
│   └── page.tsx         # Main tipping interface
├── lib/
│   └── degen.ts         # DEGEN token utilities
├── .env.local           # Environment variables (not in git)
└── .env.example         # Environment template
```

## 🔧 Configuration

### DEGEN Token Contract

The app uses the official DEGEN token contract on Base:
- **Address**: `0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed`
- **Chain**: Base (Chain ID: 8453)
- **Decimals**: 18

### Frame Metadata

Frame metadata is configured in `app/layout.tsx`:
- Image: Dynamically generated at `/api/og`
- Button: "✨ Tip 100 DEGEN"
- Action: Opens the miniapp

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_URL`: Your production URL
   - `WALLET_PRIVATE_KEY`: Your wallet's private key

### After Deployment

1. Test your Frame at: https://warpcast.com/~/developers/frames
2. Share your Frame URL in Farcaster
3. Submit to Base Batches: https://www.basebatches.xyz/

## 🔐 Security Notes

⚠️ **Important Security Considerations**:

1. **Private Key Security**:
   - Never commit `.env.local` to git (it's in `.gitignore`)
   - Use environment variables in production
   - Consider using a dedicated wallet for tipping with limited funds
   - Rotate keys regularly

2. **Production Recommendations**:
   - Implement rate limiting on tip API
   - Add user authentication
   - Monitor wallet balance
   - Set up alerts for unusual activity
   - Consider using a hot wallet with limited funds

3. **Smart Contract Interactions**:
   - Always validate recipient addresses
   - Implement transaction simulation before sending
   - Handle errors gracefully

## 🎯 Future Enhancements

- [ ] Add Neynar API integration for user address lookup
- [ ] Implement wallet connection for users to tip from their own wallets
- [ ] Add tip history and leaderboards
- [ ] Support multiple tokens (not just DEGEN)
- [ ] Add social features (comments, reactions)
- [ ] Implement gasless transactions with paymasters

## 📚 Resources

- **Farcaster Docs**: https://docs.farcaster.xyz/
- **Base Docs**: https://docs.base.org/
- **Viem Docs**: https://viem.sh/
- **DEGEN Token**: https://www.degen.tips/
- **Base Batches**: https://www.basebatches.xyz/

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this code for your own projects!

## 🙏 Acknowledgments

- Farcaster team for the amazing protocol
- Base team for the L2 infrastructure
- DEGEN community for the token
- All content creators making Farcaster awesome!

---

Built with 💜 for the Farcaster community

🚀 **Ready to deploy?** Follow the deployment guide above!
✨ **Questions?** Open an issue or reach out on Farcaster!
