import { ReactNode, useState, useEffect } from 'react';

import { auth } from '../services/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';

import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => { // enquanto estiver carregando o componente
    
    const unsub = onAuthStateChanged(auth, (user) => {

      if(user) {
        const userData = {
          uid: user?.uid,
          email: user?.email,
        }
        
        console.log(user);
        console.log(userData);

        localStorage.setItem("@reactlinks", JSON.stringify(userData));
        
        setLoading(false);
        setSigned(true);

      } else {
        setLoading(false);
        setSigned(false);
      }
    })

    // Para parar o observer quando o componente que está usando a Private for desmontado, e evitar perder performance:
    return () => { 
      unsub();
    }

  },[])

  if(loading) {
    return <div>Carregando...</div>
  }

  if(!signed) {
    return <Navigate to="/login" />
  }

  return children;

}