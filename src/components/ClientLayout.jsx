"use client"

import React, { useEffect, useState } from 'react'
import SplashScreen from '@/features/SplashScreen/SplashScreen'

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 8000);
    
    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timer);
  }, [])
  
  // Render splash screen while loading, otherwise render children
  return loading ? <SplashScreen /> : children;
}
