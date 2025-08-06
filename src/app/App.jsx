import RootLayout from '../layout/root-layout';
import { useStoreState } from 'easy-peasy';
const App = () => {
  const favoritePlaylist = useStoreState(
    (state) => state.favoritesPlaylist.items
  );
  console.log(favoritePlaylist);

  return (
    <div>
      <RootLayout />
    </div>
  );
};

export default App;
