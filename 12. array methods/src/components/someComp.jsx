const SomeComponent = ({list}) => {
    const condition = list.some(student => student.name.toLowerCase().includes("han"));

    return (
        <div>
            <h1>Some (check atlease one name includes `han`)</h1>
            <p>Value : {condition ? 'Yes' : "No"}</p>
        </div>
    );
};

export default SomeComponent;