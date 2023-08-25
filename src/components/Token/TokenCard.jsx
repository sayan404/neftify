import React from 'react'
import './TokenCard.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { TbHexagon3D } from 'react-icons/tb'
import { BiDollar } from 'react-icons/bi'
const TokenCard = ({  symbol, dexId, pairAddress, name, symbol_base, address_base, name_quote, symbol_quote, address_quote, price_native, priceUSD }) => {
    return (
        <>
            <div className='token_card'>
                <p className='type'>Basic Info</p>
                <div className='pair_creation'><span className='span_l'>Pair Created at</span> <span className='span_r'>Etherium</span></div>
                <div className='pair_creation'><span className='span_l'>Symbol</span> <span className='span_r'>{symbol}</span></div>
                <div className='pair_creation'><span className='span_l'>dexId</span> <span className='span_r'>{dexId}</span></div>
                <div className='pair_creation'><span className='span_l'>pairAddress</span> <span className='span_r'>#{pairAddress}</span></div>
                <div className='info_logo'><AiOutlineInfoCircle /></div>
            </div>
            <div className='token_card'>
                <p className='type'>Base Token</p>
                <div className='pair_creation'><span className='span_l'>Name</span> <span className='span_r'>{name}</span></div>
                <div className='pair_creation'><span className='span_l'>Symbol</span> <span className='span_r'>{symbol_base}</span></div>
                <div className='pair_creation'><span className='span_l'>Address</span> <span className='span_r'>#{address_base}</span></div>
                <div className='info_logo tb'><TbHexagon3D /></div>
            </div>
            <div className='token_card'>
                <p className='type'>Quote Token</p>
                <div className='pair_creation'><span className='span_l'>Name</span> <span className='span_r'>{name_quote}</span></div>
                <div className='pair_creation'><span className='span_l'>Symbol</span> <span className='span_r'>{symbol_quote}</span></div>
                <div className='pair_creation'><span className='span_l'>Address</span> <span className='span_r'>#{address_quote}</span></div>
                <div className='info_logo tb'><TbHexagon3D /></div>
            </div>
            <div className='token_card'>
                <p className='type'>Price</p>
                <div className='pair_creation'><span className='span_l'>Price Native</span> <span className='span_r'>{price_native}</span></div>
                <div className='pair_creation'><span className='span_l'>Price USD</span> <span className='span_r'>{priceUSD}</span></div>
                <div className='info_logo bi'><BiDollar /></div>
            </div>
        </>
    )
}

export default TokenCard