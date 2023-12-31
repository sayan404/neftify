import React, { useEffect, useState } from 'react'
import './Tokenaddress.css'
import bkgimg from '../../assets/bkgimg.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import Bottom from '../Bottom/Bottom'
import axios from 'axios'
import TokenCard from './TokenCard'
import BeatLoader from "react-spinners/BeatLoader";
import ConnectWallet from '../ConnectWallet/ConnectWallet'


const Tokenaddress = () => {

  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inputHandler = (e) => {
    e.preventDefault()
    const text = e.target.value
    setInputText(text);
    console.log(inputText);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
      );
      setData(response.data.pairs);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilteredData = async () => {
    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/search?q=` + encodeURIComponent(inputText)
      );
      setFilterData(response.data.pairs);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!inputText) {
      setFilterData([])
      fetchData();
    }
    if (inputText.length) {
      setData([])
      fetchFilteredData()
    }

  }, [inputText])

  return (
    <div className='token_main_container'>
      {loading ? <div className='loader'>
        <BeatLoader color="#07a1d9" size={20} style={{ display: "block", margin: "0 auto" }} />
      </div>
        :
        <>
          <div className='bkgimg_container'>
            <img className="bkgimg" src={bkgimg} alt='bkgimg' />
          </div>
          <div className='token_child_container'>
            <div className='top_token_section'>
              <input
                type='text'
                value={inputText}
                className='searchBox'
                placeholder='Search'
                onChange={inputHandler}
              />
              <AiOutlineSearch className='searchIcon' />
              <ConnectWallet className='connect_wallet_pos'/>
              </div>
              <p className='_text'>Token Address</p>
            <div className='data_token_section'>
              {
                filterData != '' ?
                  <>
                    {
                      filterData.map((pair, idx) => (
                        <TokenCard key={idx}
                          symbol={pair.baseToken.symbol}
                          dexId={pair.dexId}
                          pairAddress={pair.pairAddress[0] + pair.pairAddress[1] + pair.pairAddress[2] + pair.pairAddress[3]}
                          name={pair.baseToken.name}
                          symbol_base={pair.baseToken.symbol}
                          address_base={pair.baseToken.address[0] + pair.baseToken.address[1] + pair.baseToken.address[2] + pair.baseToken.address[3]}
                          name_quote={pair.quoteToken.name}
                          symbol_quote={pair.quoteToken.symbol}
                          address_quote={pair.quoteToken.address[0] + pair.quoteToken.address[1] + pair.quoteToken.address[2] + pair.quoteToken.address[3]}
                          price_native={pair.priceNative}
                          priceUSD={pair.priceUsd}
                        />
                      ))
                    }
                  </>
                  :
                  <>
                    {
                      data ? <>{
                        data.map((pair, idx) => (
                          <TokenCard key={idx}
                            symbol={pair.baseToken.symbol}
                            dexId={pair.dexId}
                            pairAddress={pair.pairAddress[0] + pair.pairAddress[1] + pair.pairAddress[2] + pair.pairAddress[3]}
                            name={pair.baseToken.name}
                            symbol_base={pair.baseToken.symbol}
                            address_base={pair.baseToken.address[0] + pair.baseToken.address[1] + pair.baseToken.address[2] + pair.baseToken.address[3]}
                            name_quote={pair.quoteToken.name}
                            symbol_quote={pair.quoteToken.symbol}
                            address_quote={pair.quoteToken.address[0] + pair.quoteToken.address[1] + pair.quoteToken.address[2] + pair.quoteToken.address[3]}
                            price_native={pair.priceNative}
                            priceUSD={pair.priceUsd}

                          />
                        ))}
                      </> : <>Something Went Wrong</>
                    }
                  </>
              }
            </div>
            <>{
                inputText ?
                <>{
                  filterData != '' ?<Bottom />:<p className='not_found'>Data Not Found</p>
                } </>: <Bottom /> 
              }
              </>
          </div>
        </>
      }
    </div>
  )
}

export default Tokenaddress