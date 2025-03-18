import { favBooks } from '../../data';
import BookList from '../BookList';

const SectionBooks = () => {
  return (
    <section>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
    </section>
  );
};
export default SectionBooks;
