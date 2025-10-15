# ⚡ Quick Start Guide

Get Karma Tipper up and running in 5 minutes!

## 🎯 What You'll Need

- GitHub account
- Vercel account (free)
- Wallet with DEGEN tokens on Base

## 🚀 Deploy to Vercel (Easiest Way)

### Method 1: Deploy from GitHub

1. **Fork or Import Repository**
   - Go to https://vercel.com/new
   - Import your GitHub repository: `https://github.com/Kimzimi/farcaster-tipper`

2. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: (leave default)
   - Output Directory: (leave default)

3. **Add Environment Variables**

   Click "Environment Variables" and add:

   ```
   NEXT_PUBLIC_URL = https://your-app-name.vercel.app
   WALLET_PRIVATE_KEY = 0x157b4fc4d3d881ecd97339982549aa928dddd9304c46e7febafcc16f0d1f8e4f
   ```

   ⚠️ **Important**: After first deployment, update `NEXT_PUBLIC_URL` with your actual Vercel URL!

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

5. **Update NEXT_PUBLIC_URL**
   - After deployment, go to: Settings → Environment Variables
   - Update `NEXT_PUBLIC_URL` with your actual URL (e.g., `https://karma-tipper.vercel.app`)
   - Redeploy from Deployments tab

### Method 2: Deploy via CLI

```bash
# 1. Login to Vercel
npx vercel login

# 2. Navigate to project
cd karma-tipper

# 3. Deploy
npx vercel

# 4. Follow prompts:
# - Set up and deploy: Yes
# - Which scope: (select your account)
# - Link to existing project: No
# - Project name: karma-tipper
# - Directory: ./

# 5. Add environment variables
npx vercel env add NEXT_PUBLIC_URL
# Enter: https://your-project-name.vercel.app

npx vercel env add WALLET_PRIVATE_KEY
# Enter: 0x157b4fc4d3d881ecd97339982549aa928dddd9304c46e7febafcc16f0d1f8e4f

# 6. Deploy to production
npx vercel --prod
```

## 🧪 Test Your Deployment

1. **Visit Your App**
   ```
   https://your-app-name.vercel.app
   ```

2. **Check OG Image**
   ```
   https://your-app-name.vercel.app/api/og
   ```

3. **Test Frame on Warpcast**
   - Go to: https://warpcast.com/~/developers/frames
   - Enter your Vercel URL
   - See your Frame preview!

## 📱 Share on Farcaster

1. Create a cast on Warpcast/Farcaster
2. Paste your Vercel URL
3. The Frame preview will appear automatically
4. Users can click "Tip 100 DEGEN" to open your miniapp!

## 🎨 Customize

### Change Tip Amounts

Edit `app/page.tsx` line 94:
```typescript
{[100, 250, 500].map((amount) => (
  // Change these numbers to your preferred amounts
```

### Change Colors

Edit the gradient in `app/page.tsx` line 57:
```typescript
className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500"
```

### Update Branding

Edit `app/layout.tsx` lines 15-17:
```typescript
title: "Your App Name",
description: "Your description",
```

## 🔐 Security Best Practices

1. **Wallet Security**
   - Use a dedicated hot wallet for tipping
   - Only keep enough DEGEN for tips
   - Never share your private key
   - Rotate keys regularly

2. **Monitor Your Wallet**
   - Check balance regularly
   - Set up transaction alerts
   - Monitor unusual activity

3. **Environment Variables**
   - Never commit `.env.local` to git
   - Use Vercel's environment variables
   - Different keys for dev/prod

## 📊 Submit to Base Batches

1. Go to: https://www.basebatches.xyz/
2. Click "Apply" (Builder Track)
3. Fill in:
   - **Project Name**: Karma Tipper
   - **URL**: Your Vercel deployment
   - **Description**: "A Farcaster Frame miniapp for tipping content creators with $DEGEN tokens on Base. Users can easily send customizable crypto tips to their favorite creators."
   - **Category**: Social / Consumer App
   - **Built on Base**: Yes
   - **Farcaster Integration**: Yes

## 🐛 Troubleshooting

### Build Failed
- Check Vercel deployment logs
- Ensure all dependencies are installed
- Verify environment variables are set

### Frame Not Showing
- Verify NEXT_PUBLIC_URL is correct
- Test OG image at `/api/og`
- Use Warpcast Frame validator

### Tips Not Sending
- Check wallet has DEGEN tokens
- Verify private key is correct
- Check Base network status
- Review API logs in Vercel

## 📚 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test on Farcaster
3. ✅ Submit to Base Batches
4. 🎯 Share with community
5. 💡 Customize and improve
6. 🌟 Get feedback

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Farcaster Docs**: https://docs.farcaster.xyz/
- **Base Docs**: https://docs.base.org/
- **GitHub Issues**: https://github.com/Kimzimi/farcaster-tipper/issues

---

Built with 💜 for the Farcaster community

Ready to spread some good karma? Let's go! ✨
