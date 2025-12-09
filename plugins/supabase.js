import { createClient } from '@supabase/supabase-js'
import { config } from './supabase-config'

export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey)