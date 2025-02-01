"use client";

import React from 'react';

export const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className="px-3 py-2 border rounded w-full" />
); 