const colorReducer = (state = "", {type, color}) => {
    switch (type) {
      case 'NEW_COLOR':
        return state = color;
      default:
        return state;
    }
  };

export default colorReducer;