import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://dnnuzihqmvrqmehkkpag.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubnV6aWhxbXZycW1laGtrcGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MDcyNzYsImV4cCI6MjA2Njk4MzI3Nn0.eQJKuNiwCF_55A0OGFq-cB7dfLUt7UInM2ZSfKjZbmA'

if (SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>') {
  throw new Error('Missing Supabase variables')
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

export default supabase