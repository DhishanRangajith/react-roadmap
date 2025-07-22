const SpliceComponent = ({list}) => {

    const text = "The sun dipped below the horizon, painting the sky orange as birds soared gracefully over the tranquil, shimmering lake.";
    const splitText = text.split(" ");
    const data = splitText.splice(1, 10, "AAAAAAAAAA");

    return (
        <div>
            <h1>Splice (split from " ", remove 10 words from 1 index and add `AAAAAAAAAA`)</h1>
            <p>Text : {text}</p>
            <p>splice : {data}</p>
        </div>
    );
};

export default SpliceComponent;