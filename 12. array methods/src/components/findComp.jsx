const FindComponent = ({list, age}) => {

    const student = list.find( item => item.age >= age);

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
                    <tr key={100+"find"}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.weight}</td>
                        <td>{student.height}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FindComponent;