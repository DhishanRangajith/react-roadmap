const FindIndexComponent = ({list, age}) => {

    const studentIndex = list.findIndex( item => item.age >= age);
    const student = list[studentIndex];

    return (
        <div>
            <h1>FindIndex (age grater than or equal to 30)</h1>
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