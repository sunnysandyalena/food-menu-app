import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>Discover our menu:</h1>
            {['APPETIZERS', 'SALADS', 'SEAFOOD', 'PASTA', 'PIZZA', 'ALL'].map(category => <Filter category={category}/>)}
        </div>
    )
}

export default AllCategories;