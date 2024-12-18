import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated';
import { anyone } from '@/access/anyone';

export const AdoptionGroups: CollectionConfig = {
  slug: 'adoption-groups',
  // access: {
  //   create: authenticated,
  //   delete: authenticated,
  //   read: anyone,
  //   update: authenticated,
  // },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    // TODO: set up this bidirectional relation properly
    // {
    //   name: 'cats',
    //   type: 'relationship',
    //   relationTo: 'cats',
    //   hasMany: true,
    // }
  ],
}
