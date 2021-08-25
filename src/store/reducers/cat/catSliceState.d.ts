interface CatFact {
  [key: string]: any;
}

interface CatSliceState {
  factsLoading: boolean;
  factsError: any;
  facts: CatFact[];
}

export default CatSliceState;
