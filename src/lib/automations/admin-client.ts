import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Lazy, shared service-role client for automation engine work.
// Mirrors the pattern used by the webhook handler
// (src/app/api/whatsapp/webhook/route.ts).
let _adminClient: SupabaseClient | null = null

export function supabaseAdmin(): SupabaseClient {
  if (!_adminClient) {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-role-key'
    _adminClient = createClient(supabaseUrl, serviceRoleKey)
  }
  return _adminClient
}
