// src/sanity/schema.ts
import { defineConfig } from 'sanity';
import post from './schemaTypes/post';
import scholarship from './schemaTypes/scholarship';
import destination from './schemaTypes/destination';
import university from './schemaTypes/university';
import author from './schemaTypes/author';
import consultation from './schemaTypes/consultation';
import category from './schemaTypes/category';

export default defineConfig({
  name: 'default',
  title: 'Rhinny Global CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  plugins: [],
  schema: {
    types: [
      post,
      scholarship,
      destination,
      university,
      author,
      consultation,
      category,
    ],
  },
});
