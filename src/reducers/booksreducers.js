const init = [
    {
        id:0,
        isbn:"0-7431-00-22",
        name:"my first book",
        price:10, 
        availability:"false", 
        author:"adel"
    },
    {
        id:1,
        isbn:"0-7431-00-23",
        name:"my second book",
        price:10, 
        availability:"true", 
        author:"adel"
    },
    {
        id:2,
        isbn:"0-7431-00-24",
        name:"my third book",
        price:10, 
        availability:"true", 
        author:"adel"
    }
]


const bookReducer = (state = init, action) => {
    switch (action.type) {
        case "REMOVE_BOOK":
            return state.filter(el => el.id !== action.id)
        case ('ADD_BOOK'):
            return [...state, action.value];
        case 'MODIF_BOOK':
            return state.map(el => el.id !== action.value.id ? el : action.value);
        default:
            return state;
    }
}
export default bookReducer; 