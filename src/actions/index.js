export const newQuote = (newText, newAuthor) => {
    return {
        type: 'NEW_QUOTE',
        quote: newText,
        author: newAuthor
    };
};

export const newData = (data) => {
    return {
        type: 'NEW_DATA',
        data: data
    };
};

export const newColor = (color) => {
    return {
        type: 'NEW_COLOR',
        color: color
    };
};