

const MapComponent = ({list}) => {
    return (
        <div>
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
                        list.map((student, index) => {
                            return (
                                <tr key={index+"map"}>
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

export default MapComponent;