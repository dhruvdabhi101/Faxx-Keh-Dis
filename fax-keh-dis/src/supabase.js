import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kslrtzdlcjfszfrbduwb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzbHJ0emRsY2pmc3pmcmJkdXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2Nzk5NjYsImV4cCI6MTk4OTI1NTk2Nn0.TK5lymMs6ouyGOhTHW-w-cyO0FSsCHTA1gOUIf1jcaA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
