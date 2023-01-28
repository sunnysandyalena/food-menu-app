import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>Discover our menu:</h1>
            {['APPETIZERS', 'SALADS', 'SEAFOOD', 'PASTA', 'PIZZA', 'ALL'].map((category, id) => <Filter category={category} key={id}/>)}
        </div>
    )
}

export default AllCategories;