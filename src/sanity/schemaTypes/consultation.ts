import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'consultation',
  title: 'Consultation Request',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country of Interest',
      type: 'reference',
      to: { type: 'destination' },
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
          { title: 'Not Sure', value: 'not-sure' },
        ],
      },
    }),
    defineField({
      name: 'fieldOfStudy',
      title: 'Field of Study',
      type: 'string',
    }),
    defineField({
      name: 'academicBackground',
      title: 'Academic Background',
      type: 'text',
      description: 'Current education level, GPA, notable achievements',
    }),
    defineField({
      name: 'intakePreference',
      title: 'Preferred Intake',
      type: 'string',
      options: {
        list: [
          { title: 'Fall 2025', value: 'fall-2025' },
          { title: 'Spring 2026', value: 'spring-2026' },
          { title: 'Fall 2026', value: 'fall-2026' },
          { title: 'Not Sure', value: 'not-sure' },
        ],
      },
    }),
    defineField({
      name: 'budgetRange',
      title: 'Budget Range',
      type: 'string',
      options: {
        list: [
          { title: 'Looking for Fully Funded', value: 'fully-funded' },
          { title: 'Under $10,000/year', value: 'under-10k' },
          { title: '$10,000 - $20,000/year', value: '10k-20k' },
          { title: '$20,000 - $50,000/year', value: '20k-50k' },
          { title: 'Over $50,000/year', value: 'over-50k' },
          { title: 'Any', value: 'any' },
        ],
      },
    }),
    defineField({
      name: 'message',
      title: 'Additional Message',
      type: 'text',
    }),
    defineField({
      name: 'consultationDate',
      title: 'Preferred Consultation Date',
      type: 'datetime',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Completed', value: 'completed' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      description: 'For staff use only',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
    defineField({
      name: 'assignedTo',
      title: 'Assigned To',
      type: 'reference',
      to: { type: 'author' },
      description: 'Staff member handling this consultation',
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      country: 'country.title',
      status: 'status',
    },
    prepare({ firstName, lastName, country, status }) {
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${country || 'No country'} • ${status || 'Unassigned'}`,
      }
    },
  },
})
