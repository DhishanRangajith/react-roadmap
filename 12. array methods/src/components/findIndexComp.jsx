const FindIndexComponent = ({list, age}) => {

    const studentIndex = list.findIndex( item => item.age >= age);
    const student = list[studentIndex];

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
                    <tr key={100+"findInx"}>
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

export default FindIndexComponent;