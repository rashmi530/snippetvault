import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lysonlrbualxabdahsmg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5c29ubHJidWFseGFiZGFoc21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNDEwMTAsImV4cCI6MjA4ODcxNzAxMH0.E6GTo6vet04iiGX79cGAZxMN-V-0Qd67TFb8XxRBZOI'

export const supabase = createClient(supabaseUrl, supabaseKey)