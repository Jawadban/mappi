export default function(state={
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    },
    creator: 'walmartlabs/Jawad'
  }
}, action) {

  switch (action.type) {
    case 'New_Store':
      return action.payload;

    case 'Old_Store':
      return '';

    default:
      return state;
  }

}
