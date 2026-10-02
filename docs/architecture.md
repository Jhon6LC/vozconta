# VozConta architecture

## Overview

VozConta is designed as a multi-tenant platform for small business accounting. It combines a mobile-first voice experience with a web dashboard for deeper operational views.

## Components

- Mobile app: collects voice transactions, logs client/provider activity, shows balances and reminders
- Backend API: handles authentication, businesses, accounts, transactions, and reporting data
- Data layer: stores tenant information, business profiles, ledger items, and analytics
- Voice AI layer: interprets spoken transaction entries and converts them into structured records
- Dashboard: summarizes cash flow, account status, and overdue balances

## Main modules

### 1. Tenant management
- each business has its own tenant record
- users belong to one or more businesses
- permissions are enforced per role

### 2. Account management
- customer accounts
- supplier accounts
- cash accounts
- ledger balances

### 3. Transaction workflows
- voice capture
- manual entry fallback
- invoice, payment, adjustment, and transfer event types

### 4. Reporting
- daily summary
- monthly ledger reports
- account aging
- outstanding balances

## Example flow

```text
User speaks: "Record payment from Juan 2500 for invoice 102"

Mobile app -> API -> Account validation -> Ledger update -> Dashboard refresh
```

## Future integration plan

- Supabase or Firebase for auth and real-time data
- OpenAI-compatible models for natural language accounting commands
- PostgreSQL for transactional data and reporting
- push notifications for outstanding balances and follow-ups
