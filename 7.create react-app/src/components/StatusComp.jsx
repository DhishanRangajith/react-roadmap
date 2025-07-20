// //Status component
// const statusComp = (status) => {
// const statusTxt = status == 1 ? "ACTIVE" : "DEACTIVE";
// const color = status == 1 ? "green" : "red";
// return React.createElement(
//     "label",
//     { style: { color: color } },
//     statusTxt,
// );
// };

const statusComp = (status) => {

    const statusTxt = status == 1 ? "ACTIVE" : "DEACTIVE";
    const color = status == 1 ? "green" : "red";

    return <label color="red">{status}</label>;

};

export default statusComp;