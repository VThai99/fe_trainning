import { ADD, REMOVE } from "./actions";

const a = [
  { id: 1, name: "b", age: 23, date: "22-11-2021" },
  { id: 2, name: "d", age: 23, date: "22-11-2021" },
  { id: 3, name: "r", age: 23, date: "22-11-2021" },
  { id: 4, name: "a", age: 21, date: "22-11-2021" },
  { id: 5, name: "c", age: 23, date: "22-11-2021" },
  { id: 6, name: "e", age: 23, date: "22-11-2021" },
  { id: 7, name: "f", age: 23, date: "22-11-2021" },
  { id: 8, name: "g", age: 23, date: "22-11-2021" },
  { id: 9, name: "h", age: 23, date: "22-11-2021" },
  { id: 10, name: "a", age: 23, date: "22-11-2021" },
  { id: 11, name: "h", age: 23, date: "22-11-2021" },
];
const initState = {
  array: a,
};
function reducer(state = initState, action) {
    console.log(action.type)
  switch (action.type) {
    case ADD:
        state.array.push(action.newItem)
        return state
    case REMOVE:
        return {
            array: state.array.filter(item => item.id !== action.id)
        }
    default:
        return state
  }
}
export default reducer;