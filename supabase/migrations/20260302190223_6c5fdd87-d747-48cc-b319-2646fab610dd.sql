
-- Add trial_start_date to profiles table
ALTER TABLE public.profiles ADD COLUMN trial_start_date TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Update existing profiles to have trial_start_date set
UPDATE public.profiles SET trial_start_date = created_at WHERE trial_start_date IS NULL;

-- Update the trigger function to set trial_start_date on new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name, trial_start_date)
  VALUES (new.id, new.raw_user_meta_data->>'display_name', now());
  RETURN new;
END;
$$;
