import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qccxnxhlwbnguujrghas.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjY3hueGhsd2JuZ3V1anJnaGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjM3MjcsImV4cCI6MjAwMDgzOTcyN30.Wkp9iMkj-h1sIol38wIZ-GSZdBYpjw9j9WBFyPIXKGc')