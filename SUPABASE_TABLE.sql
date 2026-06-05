-- Run this in Supabase SQL Editor
create table if not exists public.leads (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  format text,
  message text,
  page text,
  source text default 'website',
  user_agent text,
  status text not null default 'new'
);
alter table public.leads enable row level security;
-- Server requests use SUPABASE_SERVICE_ROLE_KEY from Vercel.
-- Service role bypasses RLS, so public insert policy is not required.
