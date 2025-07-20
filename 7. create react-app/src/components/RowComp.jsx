// //Table Data Row
// const row = (id, name, status) => {
// const statusLb = statusComp(status);
// return React.createElement("tr", {}, [
//     column(id),
//     column(name),
//     column(statusLb),
// ]);
// };

import ColumnComp from "./ColumnComp"

const RowComp = ({id, name, status}) => {
    return  <tr>
                <ColumnComp content={id}/>
                <ColumnComp content={name}/>
                <ColumnComp content={status}/>
            </tr>;
}

export default RowComp;