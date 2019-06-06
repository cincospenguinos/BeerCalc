import * as fermentableActions from '../action-creators/fermentables-actions';
import reducer from './fermentables-reducers';

describe('webpack/features/fermentables/action-creators/fermentables-actions', () => {
  it('handles batch size', () => {
    expect(reducer(undefined, fermentableActions.setBatchSize(1.1)).batchSize)
      .toEqual(1.1);
  });
});
