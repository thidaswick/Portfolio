# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher):
- Download from [nodejs.org](https://nodejs.org/)

### Installation

1. Install dependencies:
```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit the files.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── app/                # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components (to be created)
├── public/            # Static assets
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
├── tailwind.config.js # Tailwind CSS config
└── next.config.js     # Next.js config
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy (no configuration needed!)
5. Your site will be live in minutes

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click Deploy

## 📝 License

This project is open source and available under the MIT License.
