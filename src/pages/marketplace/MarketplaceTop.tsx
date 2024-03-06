import React, { FC } from 'react'
import cn from './Marketplace.module.scss'
import { spritePath } from '../../helpers/imgPath'

type MarketplaceTopProps = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const MarketplaceTop: FC<MarketplaceTopProps> = ({ inputValue, setInputValue }) => {
  return (
    <div className={cn['marketplace__top']}>
      <div className='container'>
        <h2 className='text-work-h2'>Browse Marketplace</h2>
        <h5 className={'text-work-h5'}>
          Browse through more than 50k NFTs on the NFT Marketplace.
        </h5>
        <div className={cn['search']}>
          <input
            onChange={e => setInputValue(() => e.target.value)}
            value={inputValue}
            className={[cn['search__input'], 'text-work-body'].join(' ')}
            type='text'
            placeholder='Search by name or address'
          />

          {!inputValue && <div></div>}
          <svg
            onClick={() => setInputValue('')}
            className={[cn['search__clear'], !inputValue && cn['hidden']].join(' ')}>
            <use href={spritePath + '#plus'}></use>
          </svg>
          <svg className={cn['search__magnifier']}>
            <use href={spritePath + '#search'}></use>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceTop
