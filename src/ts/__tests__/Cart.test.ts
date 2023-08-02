import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add card Movie', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 2012, 'USA','Avengers Assemble!','fantasy', 137, 2500));
  expect(cart.items.length).toBe(1);
});

test('sum ', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 2012, 'USA','Avengers Assemble!','fantasy', 137, 2500));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  expect(cart.sum()).toBe(4500);
});

test('sumBonus ', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 2012, 'USA','Avengers Assemble!','fantasy', 137, 2500));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  expect(cart.sumBonus(10)).toBe(4050);
});

test('delete ', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 2012, 'USA','Avengers Assemble!','fantasy', 137, 2500));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.delete(1001)
  expect(cart.items.length).toBe(1);
});