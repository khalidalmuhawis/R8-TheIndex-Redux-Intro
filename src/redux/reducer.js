import authors from "../data.js"

const initialState = {
  authors: authors,
  newAuthorId: 5
};



export default (state = initialState, action) => {

  switch(action.type){
    case 'ADD_AUTHOR':
      const newAuthor = {
        id: state.newAuthorId,
        first_name: "Author",
        last_name: "McAuthorFace",
        imageUrl: "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
        books: [
          {
            title: "Anonymous book",
            color: "mysterious color"
          }
        ]
      };
      return {
        ...state,
        authors:[...state.authors,newAuthor],
        newAuthorId: state.newAuthorId + 1
      }

      case 'DELETE_AUTHOR':
        return {
          ...state,
          authors:state.authors.filter(author => author.id !== action.author.id),
        }


    default:
      return {
        ...state,
      };
  }
};