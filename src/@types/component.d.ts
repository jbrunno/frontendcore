import React from 'react';

declare module 'react' {
  interface Attributes {
    perm?: string;
    ['w-perm']?: string;
  }
}
