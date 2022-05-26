const randomQuote = (state = {quote : "" , author : ""}, {type,quote,author}) => {
    switch (type) {
      case 'NEW_QUOTE':
        return state = {quote : quote , author : author};
      default:
        return state;
    }
  };

export default randomQuote;