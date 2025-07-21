const Search = ({parent}) => {

    const onChangeSearch = (event) => {
        parent(event)
    };

    return (
        <div style={{width: "100%", 'text-align': "center"}}>
            <input type="text" placeholder="Search..." onChange={onChangeSearch}/>
        </div>
    );
}

export default Search;