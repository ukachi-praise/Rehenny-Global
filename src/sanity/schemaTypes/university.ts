import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'university',
  title: 'University',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'University Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'destination' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'University Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Official Website',
      type: 'url',
    }),
    defineField({
      name: 'ranking',
      title: 'World Ranking',
      type: 'number',
      description: 'e.g., 5, 15, 45',
    }),
    defineField({
      name: 'programsOffered',
      title: 'Programs Offered',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'programName', type: 'string', title: 'Program Name' },
            { name: 'duration', type: 'string', title: 'Duration (e.g., 2 years)' },
            { name: 'tuitionFee', type: 'string', title: 'Tuition Fee' },
          ],
        },
      ],
    }),
    defineField({
      name: 'admissionRequirements',
      title: 'Admission Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'internationalStudents',
      title: 'Percentage of International Students',
      type: 'string',
      description: 'e.g., 25%, 40%',
    }),
    defineField({
      name: 'scholarshipsAvailable',
      title: 'Scholarships Available',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'about',
      title: 'About the University',
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
      name: 'campusLife',
      title: 'Campus Life & Facilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'applicationDeadlines',
      title: 'Application Deadlines',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'intake', type: 'string', title: 'Intake (e.g., Fall 2025)' },
            { name: 'deadline', type: 'datetime', title: 'Deadline' },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured University',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'admissionsEmail', type: 'string', title: 'Admissions Email' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      country: 'country.title',
      ranking: 'ranking',
    },
    prepare({ title, country, ranking }) {
      return {
        title: title || 'Untitled University',
        subtitle: `${country || 'Unknown'} ${ranking ? `• Rank #${ranking}` : ''}`,
      }
    },
  },
})
