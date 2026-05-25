export const isDemoMode =
  !import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.VITE_SUPABASE_URL === 'YOUR_SUPABASE_URL_HERE' ||
  import.meta.env.VITE_SUPABASE_URL === 'https://placeholder.supabase.co'

export const demoUser = {
  id: 'demo-owner',
  email: 'andrew@studiomethod.com.au',
  full_name: 'Andrew Smith',
  role: 'owner',
  title: 'Founder',
  avatar_url: null,
}

export const demoClientUser = {
  id: 'demo-client',
  email: 'james@afterpay.com',
  full_name: 'James Okafor',
  role: 'client',
  company: 'Afterpay',
  title: 'Design Lead',
  client_id: 'client-001',
}

export const demoConsultantUser = {
  id: 'demo-consultant',
  email: 'jordan@studiomethod.com.au',
  full_name: 'Jordan Nakamura',
  role: 'consultant',
  consultant_id: 'consultant-001',
}

export const demoIndividualUser = {
  id: 'demo-individual',
  email: 'sam@freelance.com',
  full_name: 'Sam Rivera',
  role: 'individual',
  plan: 'individual',
}
