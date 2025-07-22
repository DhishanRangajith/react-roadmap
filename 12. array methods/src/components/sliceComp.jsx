const SliceComponent = () => {

    const text = "The sun dipped below the horizon, painting the sky orange as birds soared gracefully over the tranquil, shimmering lake.";

    const data = text.slice(5, 20);
    console.log(2, data);

    return (
        <div>
            <h1>Slice (5 to 20)</h1>
            <p>Text : {text}</p>
            <p>Slice : {data}</p>
        </div>
    );
};

export default SliceComponent;