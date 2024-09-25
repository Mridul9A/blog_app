// src/components/ClientWrapper.tsx
"use client";

import { RecoilRoot } from 'recoil';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default ClientWrapper;
