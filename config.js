import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://jqgwhuzqfyzsdwcsmkga.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZ3dodXpxZnl6c2R3Y3Nta2dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwMTc1NDgsImV4cCI6MjA4NDU5MzU0OH0.E7y7nGMvNv-CDihs6n0fpIvwAvq4jhJnQwwsluYRyB8'

export const supabase = createClient(supabaseUrl, supabaseKey)