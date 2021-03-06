import styles from'./DogCard.module.css'
import defaultImage from './defaultImage.png'

import { useNavigate } from 'react-router-dom'

export default function DogCard (props){
    const navigate = useNavigate()
    
    return (
    <div className={styles.mainDiv} onClick={() => navigate(`/BreedDetail/${props.id}`)}>
        <h2>{props.name}</h2>
        <img src={props.image} alt='Dog' onError={(e)=>{
            e.target.onerror = null
            e.target.src = defaultImage}} />
        {
        props.weight !== null ? <h4>{`Weight: ${props.weight}Kg`}</h4>
        : <h4>Weight value not available</h4>
        }
        <div className={styles.temperaments}>
            {
            props.temperament ? props.temperament.map((temp, idx) => {
                return <div className={styles.temp} key={idx}>{temp}</div>
            }) : <div className={styles.temp} >No temperaments received.</div>
            }
        </div>
    </div>
    )
}
