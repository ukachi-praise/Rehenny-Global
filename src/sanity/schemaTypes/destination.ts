import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Country Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: 'A brief one-line description for cards/listings',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'flagEmoji',
      title: 'Flag Emoji',
      type: 'string',
      description: 'e.g., 🇨🇦 for Canada',
    }),
    defineField({
      name: 'universities',
      title: 'Popular Universities',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'university' },
        },
      ],
    }),
    defineField({
      name: 'visaRequirements',
      title: 'Visa Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'generalInfo',
      title: 'General Information',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'applicationProcess',
      title: 'Application Process',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'tuitionCosts',
      title: 'Tuition Costs',
      type: 'string',
      description: 'e.g., $15,000 - $25,000 per year',
    }),
    defineField({
      name: 'livingCosts',
      title: 'Living Costs',
      type: 'string',
      description: 'e.g., $12,000 - $18,000 per year',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Destination',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      flag: 'flagEmoji',
      media: 'featuredImage',
    },
    prepare({ title, flag, media }) {
      return {
        title: `${flag || '🌍'} ${title}`,
        media,
      }
    },
  },
})
