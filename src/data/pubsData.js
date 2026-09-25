import entries from './generated/publications';
const publications = [...entries].sort((a,b) => {
  const [am,ay] = a.date.split('/').map(Number);
  const [bm,by] = b.date.split('/').map(Number);
  return by-ay || bm-am;
});
export default publications;
