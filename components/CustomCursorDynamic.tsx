'use client';

import dynamic from 'next/dynamic';

export const CustomCursorDynamic = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false
});

