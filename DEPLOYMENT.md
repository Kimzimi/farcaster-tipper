# 🚀 Deployment Guide

This guide will walk you through deploying Karma Tipper to Vercel.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- Vercel CLI installed: `npm i -g vercel`
- Your wallet private key with DEGEN tokens on Base

## Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

## Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

## Step 3: Deploy

From the project directory:

```bash
cd karma-tipper
vercel
```

Follow the prompts:
- **Set up and deploy**: Yes
- **Which scope**: Select your account
- **Link to existing project**: No
- **Project name**: karma-tipper (or your preferred name)
- **Directory**: ./
- **Override settings**: No

## Step 4: Configure Environment Variables

After the first deployment, set up your environment variables:

### Option A: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project (karma-tipper)
3. Go to Settings → Environment Variables
4. Add the following variables:

```
NEXT_PUBLIC_URL = https://your-project-name.vercel.app
WALLET_PRIVATE_KEY = 0x157b4fc4d3d881ecd97339982549aa928dddd9304c46e7febafcc16f0d1f8e4f
```

### Option B: Using Vercel CLI

```bash
vercel env add NEXT_PUBLIC_URL
# Enter: https://your-project-name.vercel.app

vercel env add WALLET_PRIVATE_KEY
# Enter: 0x157b4fc4d3d881ecd97339982549aa928dddd9304c46e7febafcc16f0d1f8e4f
```

## Step 5: Redeploy with Environment Variables

```bash
vercel --prod
```

## Step 6: Verify Deployment

1. Visit your deployed URL: `https://your-project-name.vercel.app`
2. Check the Frame metadata at: `https://your-project-name.vercel.app/api/og`
3. Test on Warpcast Frame Validator: https://warpcast.com/~/developers/frames

## Step 7: Share on Farcaster

1. Post your Frame URL on Farcaster/Warpcast
2. The Frame preview should show your custom OG image
3. Users can click "Tip 100 DEGEN" to open your miniapp

## Step 8: Submit to Base Batches

1. Go to https://www.basebatches.xyz/
2. Click "Apply" for the Builder Track
3. Submit your project with:
   - Project URL: Your Vercel deployment URL
   - Description: Karma Tipper - A Farcaster Frame for tipping creators with $DEGEN
   - Demo video (optional but recommended)

## Updating Your Deployment

To deploy updates:

```bash
git add .
git commit -m "Your update message"
vercel --prod
```

Or if not using git:

```bash
vercel --prod
```

## Monitoring

### Check Deployment Status
```bash
vercel ls
```

### View Logs
```bash
vercel logs your-project-url
```

### Check Environment Variables
```bash
vercel env ls
```

## Troubleshooting

### Build Fails
- Check build logs: `vercel logs`
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Environment Variables Not Working
- Make sure you redeployed after adding env vars
- Check env vars are set for Production environment
- Use `vercel env pull` to download env vars locally

### Frame Not Showing on Farcaster
- Verify Frame metadata in browser dev tools
- Test with Frame validator
- Ensure NEXT_PUBLIC_URL is set correctly
- Check OG image is loading at `/api/og`

## Security Checklist

- ✅ Private key stored as environment variable (not in code)
- ✅ .env.local in .gitignore
- ✅ Using HTTPS (Vercel provides this automatically)
- ✅ Environment variables only accessible server-side
- ⚠️ Consider using a hot wallet with limited funds
- ⚠️ Monitor wallet balance regularly
- ⚠️ Set up transaction alerts

## Custom Domain (Optional)

To use a custom domain:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Update NEXT_PUBLIC_URL environment variable
5. Redeploy

## Cost

- Vercel Hobby plan is FREE for personal projects
- Includes:
  - Unlimited deployments
  - HTTPS/SSL certificates
  - CDN hosting
  - Serverless functions

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Farcaster Docs: https://docs.farcaster.xyz/

---

🎉 **Congratulations!** Your Karma Tipper is now live!

Share it with the Farcaster community and start spreading good karma! ✨
