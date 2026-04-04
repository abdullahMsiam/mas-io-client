
import Banner from './Banner';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';





const Home = () => {
    const apps = useLoaderData(); 
    console.log(apps);
   
    return (
        <div>
            <Banner />
            <TrendingApps apps={apps} />
        </div>
    );
};

export default Home;