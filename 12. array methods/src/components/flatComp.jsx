const FlatComponent = ({list}) => {

    const data1 = [1, 2, [3, 4, [5, 6, [10, 11, 12]]], [7, 8]];
    const data2 = data1.flat();
    const data3 = data1.flat(2);
    const data4 = data1.flat(Infinity);

    return (
        <div>
            <h1>Flat</h1>
            <p>Data : {JSON.stringify(data1)}</p>
            <p>Result (flat) : {JSON.stringify(data2)}</p>
            <p>Result (flat-2) : {JSON.stringify(data3)}</p>
            <p>Result (flat-infinity) : {JSON.stringify(data4)}</p>
        </div>
    );
};

export default FlatComponent;