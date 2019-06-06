import * as fermentableActions from './fermentables-actions';

describe('webpack/features/fermentables/action-creators/fermentables-actions', () => {
  describe('#setBatchSize', () => {
    it('takes the proper shape', () => {
      expect(fermentableActions.setBatchSize(3.3))
        .toEqual({
          type: 'SET_BATCH_SIZE',
          payload: 3.3,
        });
    });
  });
});
