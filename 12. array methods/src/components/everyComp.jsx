const EveryComponent = ({list}) => {

    const condition = list.every(student => student.name.toLowerCase().includes("a"));

    return (
        <div>
            <h1>Every (check all name includes `a`)</h1>
            <p>Value : {condition ? 'Yes' : "No"}</p>
        </div>
    );
};

export default EveryComponent;