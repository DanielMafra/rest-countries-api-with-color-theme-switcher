import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './details.module.css';
import Header from '../Header/index';
import { ReactComponent as Back } from '../../assets/back.svg';

const Details = () => {
  const [data, setData] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([]);
  const [updateData, setUpdateData] = useState('');
  const { name } = useParams();
  const { darkTheme, loading, setLoading } = useContext(GlobalContext);
  const navigate = useNavigate();

  //fetch location clicked by user on home
  useEffect(async () => {
    setLoading(true);
    const response = await fetch(`https://restcountries.com/v2/alpha/${name}`)
    const json = await response.json();
    !json.status && setData(json);
  }, []);

  useEffect(async () => {
    if (updateData != '') {
      setCurrencies([]);
      setBorders([]);
      setUpdateData('');
      const response = await fetch(`https://restcountries.com/v2/alpha/${updateData}`)
      const json = await response.json();
      !json.status && setData(json);
      navigate(`/${updateData}`);
    }
  }, [updateData]);

  //define languages, currencies and location borders
  useEffect(async () => {
    setLoading(true);
    data != '' && data.currencies !== undefined && data.currencies.map(currency => {
      setCurrencies(oldArray => [...oldArray, currency.name]);
    });
    data != '' && data.languages.map(lang => {
      setLanguages(oldArray => [...oldArray, lang.name])
    });
    data != '' && data.borders != undefined && data.borders.map(async (border) => {
      const response = await fetch(`https://restcountries.com/v2/alpha/${border}`)
      const json = await response.json();
      !json.status && setBorders(oldArray => [...oldArray, json]);
    })
    setLoading(false);
  }, [data]);

  return (
    <>
      <Header />
      {data != '' && (
        <main className={`${styles.main} ${darkTheme ? styles.mainDark : styles.mainLight}`}>
          <div className={`${styles.container} ${darkTheme ? styles.containerDark : styles.containerLight}`}>
            <button aria-label="Back to Home" onClick={() => navigate("/")}><Back /><span>Back</span></button>
            {loading ? (
              <div className={styles.loader}></div>
            ) : (
              <div className={styles.content}>
                <img src={`${data.flags.svg}`} alt="" />
                <div>
                  <div className={`${styles.infos} ${darkTheme ? styles.infosDark : styles.infosLight}`}>
                    <h2>{data.name}</h2>
                    <div className={styles.columns}>
                      <div className={styles.column}>
                        <span><strong>Native Name:</strong> {data.nativeName}</span>
                        <span><strong>Population:</strong> {data.population.toLocaleString()}</span>
                        <span><strong>Region:</strong> {data.region}</span>
                        <span><strong>Sub Region:</strong> {data.subregion}</span>
                        <span><strong>Capital:</strong> {data.capital}</span>
                      </div>
                      <div className={styles.column}>
                        <span><strong>Top Level Domain:</strong> {data.topLevelDomain}</span>
                        <span><strong>Currencies:</strong> {currencies.join(', ')}</span>
                        <span><strong>Languages:</strong> {languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                  {borders != '' && (
                    <div className={styles.borders}>
                      <strong className={darkTheme ? styles.dark : styles.light}>Border Countries:</strong>
                      <div className={`${styles.list} ${darkTheme ? styles.listDark : styles.listWhite}`}>
                        {borders.map(border => {
                          return <button aria-label={`Details about ${border.name}`} key={border.alpha2Code} onClick={() => setUpdateData(border.alpha2Code)}>{border.name}</button>
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  )
}

export default Details;