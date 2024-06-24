import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; /// env variables in vite are prefixed with VITE_ and must be accessed from import.meta.env
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
