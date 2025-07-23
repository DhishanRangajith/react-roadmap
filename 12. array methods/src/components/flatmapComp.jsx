const FlatMapComponent = ({list}) => {

    const data1 = [1, 2, 3, 4, 5, 6];
    const data2 = data1.flatMap(x => [x * 100]);

    return (
        <div>
            <h1>FlatMap</h1>
            <p>Data : {JSON.stringify(data1)}</p>
            <p>Result (flatMap) : {JSON.stringify(data2)}</p>
        </div>
    );
};

export default FlatMapComponent;