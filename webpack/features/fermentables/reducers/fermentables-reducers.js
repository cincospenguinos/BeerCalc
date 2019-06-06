export default function (state = {}, action) {
  switch(action.type) {
    case 'SET_BATCH_SIZE': {
      const batchSize = action.payload;
      return {
        batchSize,
        ...state,
      }
    }
  }
}
