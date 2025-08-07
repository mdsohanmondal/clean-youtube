import RootLayout from '../layout/root-layout';
import storage from '../storage/PlaylistStorage';
const App = () => {
  // const recents = useStoreState((state) => state.recentPlaylist.items);
  const recents = storage.getRecentPlaylist();
  console.log(recents);
  return (
    <div>
      <RootLayout />
    </div>
  );
};

export default App;
