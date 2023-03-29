import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Card from './Card/Card';
import { delet, getData, local } from '../Utiliti';
import Food from './Food';

const Header = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=cake`)
            .then(res => res.json()).then(data => setApiData(data.meals))
    }, [])

    const [save, setSave] = useState([])
    const [sam, setSam] = useState(0)

    const click = (c, tf) => {
        tf ? local(c) : delet(c)
        setSam(sam > 10 ? 0 : sam + 1)
    }


    useEffect(() => {
        let newData = []
        const getData2 = getData()
        if (getData2) {
            for (const id in getData2) {
                const singleData = apiData.find(g => g.idMeal === id)
                const quantity = getData2[id]
                const newSingle = { ...singleData, quantity }
                newData.push(newSingle)
            }
        }
        setSave(newData)
    }, [apiData, sam])



    return (
        <>
            <div className='row d-flex flex-column-reverse flex-md-row'>
                <div className="col-12 col-md-8">
                    <div className="row g-3 my-4">
                        {apiData.map(a => <Card click={click} key={a.idMeal} a={a}></Card>)}
                    </div>
                </div>
                <div className="col-12 col-md-4 ">
                    <div className='my-4 bg-light shadow-lg p-3 rounded-3'> 
                        <h3 className='text-center mb-4'>Selected Products</h3>
                        {save.map(s => <Food  s={s}></Food>)}
                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;