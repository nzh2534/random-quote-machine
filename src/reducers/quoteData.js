const quoteData = (state = {}, {type, data}) => {
    switch (type) {
      case 'NEW_DATA':
        return state = data;
      default:
        return state;
    }
  };

export default quoteData;