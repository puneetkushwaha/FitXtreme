import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xhbtvahutdnysvyariur.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoYnR2YWh1dGRueXN2eWFyaXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4ODg0MTksImV4cCI6MjA1NTQ2NDQxOX0.JahGF5eaFi4UR8enwJrGQv6SOfopeUH1Trw0MgaTu5M'; // Replace with your Supabase anon key
export const supabase = createClient(supabaseUrl, supabaseKey);
