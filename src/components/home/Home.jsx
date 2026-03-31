
import Banner from './Banner';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';


// const fetchApps = async () => {
//     const response = await fetch('/public/apps.json');
//     const data = await response.json();
//     return data;
// }



const Home = () => {

    // const apps = fetchApps();
    // console.log(apps);

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