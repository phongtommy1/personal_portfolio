import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react'
import { featurePortfolio, webPortfolio, mobilePortfolio, etcPortfolio } from '../../data'

export default function Portfolio() {

    const [selected, setSelected] = useState("feature")
    const [data, setData] = useState([])
    const list = [
        {
            id: 'feature',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'etc',
            title: 'Etc',
        },

    ]

    useEffect(() => {
        switch (selected) {
            case 'feature':
                setData(featurePortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'etc':
                setData(etcPortfolio);
                break;
            default:
                setData(featurePortfolio)
                break;

        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>

                ))}

            </div>
        </div>
    )
}
