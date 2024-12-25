import { CollectionConfig } from 'payload';
import { authenticated } from '@/access/authenticated';
import { anyone } from '@/access/anyone';

export const Cats: CollectionConfig = {
  slug: 'cats',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'sex',
      type: 'radio',
      required: true,
      options: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
      ],
      defaultValue: 'male',
    },
    {
      label: 'Birth Date',
      name: 'birthday',
      type: 'date',
      required: true,
    },
    {
      name: 'stage',
      type: 'radio',
      options: [
        {
          label: 'Kitten',
          value: 'kitten',
        },
        {
          label: 'Adult',
          value: 'adult',
        },
        {
          label: 'Senior',
          value: 'senior',
        },
      ],
    },
    {
      name: 'neutered',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'microchipped',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'breed',
      type: 'text',
    },
    {
      name: 'colour',
      type: 'text',
    },
    {
      name: 'weight',
      type: 'number',
      label: 'Weight (kg)',
    },
    // TODO: Look at how to do bi-directional relations using Join Field so you can check if a cat is part of a group
    // {
    //   name: 'adoption-group',
    //   type: 'relationship',
    //   relationTo: 'adoption-groups',
    // },
    {
      name: 'image-input-label',
      type: 'ui',
      admin: {
        components: {
          Field: 'src/components/CollectionCustomUI/ImageInputLabel.tsx'
        }
      }
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
