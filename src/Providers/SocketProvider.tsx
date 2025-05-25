'use client';

import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { connectSocket, disconnectSocket } from '@/utils/socket';
import { useEffect } from 'react';

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  // console.log(user, 'user in socket provider');
  useEffect(() => {
    if (user) {
      connectSocket(user.id);
    }

    return () => {
      disconnectSocket();
    };
  }, [user]);

  return <>{children}</>;
};

export default SocketProvider;
