

const FilterComponent = ({list, name}) => {

    const filteredList = list.filter( student => student.name.toUpperCase().includes(name.toUpperCase()));

    return (
        <div>
            <h1>Filter (by name = 'an')</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Height</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredList.map((student, index) => {
                            return (
                                <tr key={index+"filter"}>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.weight}</td>
                                    <td>{student.height}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FilterComponent;