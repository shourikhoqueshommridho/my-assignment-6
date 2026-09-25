import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";

const Home = () => {
  return (
    <>
      
      <Hero />
      <div id="library">
        <WorkoutLibrary />
      </div>
    </>
  );
};

export default Home;