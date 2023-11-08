import { Replicache, WriteTransaction } from 'replicache'

export const rep = new Replicache({
  name: 'test-sync-4',
  licenseKey: '',
  mutators: {
    addItem: async (tx: WriteTransaction, { id }: { id: string }) => {
      await tx.put(`items/${id}`, { id })
    },
  },
})
