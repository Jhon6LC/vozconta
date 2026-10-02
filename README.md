# VozConta

VozConta is a voice-first, multi-tenant business accounting and account management platform designed for small businesses.

It helps business owners manage customer and supplier accounts, track balances, capture transactions via voice input, and review financial summaries through a mobile-first experience with a web dashboard for reporting.

## Product vision

- Voice-first capture for transactions and invoices
- Multi-tenant support for different business profiles
- Client/provider ledger management
- Quick account status checks and payment reminders
- Home screen widget for rapid voice entry
- Admin-facing web dashboard for analytics and reporting

## Repository structure

- `mobile/` — React Native / Expo app for iOS and Android
- `backend/` — API server for auth, accounts, ledger, and onboarding logic
- `docs/` — architecture, onboarding flow, and voice command examples
- `README.md` — product overview
- `.env.example` — environment variables template

## Tech stack

- Mobile: React Native + Expo + TypeScript
- Backend: Node.js + Express + TypeScript
- Data layer: PostgreSQL + Prisma (plan)
- Auth: Supabase / Firebase (project option)
- AI voice workflows: OpenAI-compatible APIs / speech processing service

## Getting started

### Mobile app

```bash
cd mobile
npm install
npm run start
```

### Backend API

```bash
cd backend
npm install
npm run dev
```

## Example environment variables

Copy `.env.example` to a local file and populate values.

## Milestone 1: onboarding flow

This repo includes the first milestone for the onboarding experience:

- splash screen
- welcome screen
- business profile selection
- account setup demo
- permissions / voice setup
- home dashboard preview

## Notes

This is the initial project scaffold for the first milestone. The app is intentionally structured to support future expansion into data models, ledger workflows, AI voice processing, and reporting dashboards.
