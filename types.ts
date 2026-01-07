
import React from 'react';

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}