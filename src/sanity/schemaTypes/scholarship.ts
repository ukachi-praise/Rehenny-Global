import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'scholarship',
  title: 'Scholarship',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Scholarship Title',
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
      name: 'fundingType',
      title: 'Funding Type',
      type: 'string',
      options: {
        list: [
          { title: 'Fully Funded', value: 'fully-funded' },
          { title: 'Partial', value: 'partial' },
          { title: 'Merit Based', value: 'merit-based' },
          { title: 'Need Based', value: 'need-based' },
        ],
      },
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'destination' },
    }),
    defineField({
      name: 'university',
      title: 'University',
      type: 'reference',
      to: { type: 'university' },
    }),
    defineField({
      name: 'deadline',
      title: 'Application Deadline',
      type: 'datetime',
    }),
    defineField({
      name: 'amount',
      title: 'Scholarship Amount',
      type: 'string',
      description: 'e.g., $10,000, Full Tuition, etc.',
    }),
    defineField({
      name: 'programType',
      title: 'Program Type',
      type: 'string',
      options: {
        list: [
          { title: 'Undergraduate', value: 'undergraduate' },
          { title: 'Masters', value: 'masters' },
          { title: 'PhD', value: 'phd' },
          { title: 'Diploma', value: 'diploma' },
          { title: 'Certificate', value: 'certificate' },
        ],
      },
    }),
    defineField({
      name: 'intake',
      title: 'Intake',
      type: 'string',
      options: {
        list: [
          { title: 'Fall', value: 'fall' },
          { title: 'Spring', value: 'spring' },
          { title: 'Summer', value: 'summer' },
          { title: 'Winter', value: 'winter' },
        ],
      },
    }),
    defineField({
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Scholarship',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Detailed Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      country: 'country.title',
      fundingType: 'fundingType',
      media: 'mainImage',
    },
    prepare({ title, country, fundingType, media }) {
      return {
        title: title || 'Untitled Scholarship',
        subtitle: `${country || 'Unknown Country'} • ${fundingType || 'Not specified'}`,
        media,
      }
    },
  },
})
