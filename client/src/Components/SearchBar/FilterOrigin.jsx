import { useDispatch } from "react-redux"
import { filterByOrigin } from '../../Redux/Actions'

import styles from './SearchBar.module.css'

export default function FilterByOrigin({setCurrentPage, setselectReload, selectReload}){
    const dispatch = useDispatch()

    function onChange(e){
        let filter = e.target.value
        dispatch(filterByOrigin(filter))
        setCurrentPage(1)
        setselectReload(filter)
    }
    return (
        <div className={styles.filterO} >
            <label htmlFor="filter" className={styles.labelOrigin} >Filter by Origin:</label>
                <select name="filter" onChange={onChange} className={styles.selectOrigin} value={selectReload}>
                    <option value="all">All Breeds</option>
                    <option value="existing">Existing Breeds</option>
                    <option value="created">Created by User</option>
                </select>
        </div>
    )
}