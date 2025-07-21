

const ForEachComponent = ({list}) => {

    const fList = [];

    list.forEach((student, index) => {
        fList.push(
            <tr key={"foreach"+index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.weight}</td>
                <td>{student.height}</td>
            </tr>
        );
    });

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
                    {fList}
                </tbody>
            </table>
        </div>
    );
};

export default ForEachComponent;