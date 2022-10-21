import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Home_Catalogue = () => {

  const [reds, setREDs] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [redsPerPage] = useState(15);

  const getREDs = async () => {
      const result = await fetch("https://api.portalmec.c3sl.ufpr.br/v1/learning_objects");
      let APIdata = await result.json();
      APIdata = [...APIdata, ...APIdata, ...APIdata, ...APIdata, ...APIdata]
      setREDs(APIdata)
  }

  useEffect(() => {
      getREDs();
  }, [])

  // Dividing on portions of 15 REDs
  const lastidx = curPage * redsPerPage;
  const firstidx = lastidx - redsPerPage;
  const curREDs = reds.slice(firstidx, lastidx);

   // Changing page

  const paginate = (pageNumber) => setCurPage(pageNumber);

  return <div>
      <Header/>
      <Home/>
      <Card reds={curREDs}/>
      <Pagination redsPerPage={redsPerPage} total={reds.length} paginate={paginate}/>
    </div>
};

export default Home_Catalogue;