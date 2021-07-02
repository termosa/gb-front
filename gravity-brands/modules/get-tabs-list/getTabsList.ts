interface IItem {
  title: string
  extendable: boolean
}

export const getTabsList = (): Array<IItem> => {
  return [
    {
      title: 'Spring',
      extendable: false,
    },
    {
      title: 'Bath Bombs',
      extendable: false,
    },
    {
      title: 'Candles',
      extendable: false,
    },
    {
      title: 'All',
      extendable: true,
    },
    {
      title: 'Subscription',
      extendable: true,
    },
    {
      title: 'Rewards',
      extendable: true,
    },
    {
      title: 'Vault',
      extendable: false,
    },
  ]
}
