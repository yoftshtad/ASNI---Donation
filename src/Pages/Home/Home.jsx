import './Home.css';
import { Hero, Whoweare, Blog, Difference } from '../Home/index';
import Stats from './Stats/Stats';
import GalleryPreview from './GalleryPreview/GalleryPreview'; 

function Home() {
  return (
    <main className="Home">
      <Hero />
      <Stats />
      <Whoweare />
      <GalleryPreview /> 
      <Difference />
      <Blog />
    </main>
  );
}

export default Home;