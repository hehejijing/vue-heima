let friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
]
const arr = friends.reduce((pre,next) => {
  const [one, two] = next.books
  pre.push(one)
  pre.push(two)
  return pre
},[])
console.log(arr)
// ['Bible', 'Harry Potter','War and peace', 'Romeo and Juliet','The Lord of the Rings', 'The Shining']