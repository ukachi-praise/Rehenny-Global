import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import author from './author'
import category from './category'
import scholarship from './scholarship'
import destination from './destination'
import university from './university'
import consultation from './consultation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, scholarship, destination, university, consultation],
}
