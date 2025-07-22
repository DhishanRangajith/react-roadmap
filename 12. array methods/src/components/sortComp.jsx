const SortComponent = ({list}) => {

    const text = "The sun dipped below the horizon, painting the sky orange as birds soared gracefully over the tranquil, shimmering lake.";
    const splitText = text.split(" ");
    const sortText = [...splitText].sort((a, b) => a.localeCompare(b));
    const jointext = sortText.join(" ");

    return (
        <div>
            <h1>Sort (seperate words and sort and re-join)</h1>
            <p>Text : {text}</p>
            <p>Split array : {splitText}</p>
            <p>Sorted array : {sortText}</p>
            <p>Join sorted array(Text) : {jointext}</p>
        </div>
    );
};

export default SortComponent;