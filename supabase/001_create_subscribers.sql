-- Run this once in the Supabase SQL Editor (Project > SQL Editor > New query).
-- Creates the table that stores lead magnet subscribers.

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  lead_magnet text not null,
  created_at timestamptz not null default now(),
  unique (email, lead_magnet)
);

-- Row Level Security is enabled with no policies, so only requests using the
-- SUPABASE_SECRET_KEY (server-side, in api/subscribe.js) can read or write.
-- The browser never talks to this table directly.
alter table public.subscribers enable row level security;
