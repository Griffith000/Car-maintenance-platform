'use client';

// this component doesn't render anything it just syncs the user data from the auth js session 
// with the user store in the client side from Zustand
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useUserStore } from '@/app/stores/userStore';

export default function UserStoreSync() {
  const { data: session } = useSession();
  console.log("I'm in the sesssion provider " + session)
  const { setUserData } = useUserStore();

  useEffect(() => {
    if (session?.user) {
      const userId = session.user.id ? Number(session.user.id) : null;
      const name = session.user.name || null;
      const email = session.user.email || null;
      
      console.log('Setting user data from session:', { userId, name, email });
      setUserData(userId, name, email);
    }
  }, [session, setUserData]);

  return null;
}
