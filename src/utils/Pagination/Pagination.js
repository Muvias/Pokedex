import { useContext } from "react"
import { PokeContext } from "../../providers/pokemon"

import { PaginationContainer } from './styled';

export default function Pagination() {
    const {page, setPage, totalPages} = useContext(PokeContext)

    function clickToPreviousHandle() {
        if(page > 0) {
            setPage(page-1)
        }
    }

    function clickToNextHandle(){
        if(page !== totalPages) {
            setPage(page+1)
        }
    }
    return (
        <PaginationContainer>
            <button onClick={clickToPreviousHandle}>⪻</button>
            <div>{page} de {totalPages}</div>
            <button onClick={clickToNextHandle}>⪼</button>
        </PaginationContainer>
    )
}