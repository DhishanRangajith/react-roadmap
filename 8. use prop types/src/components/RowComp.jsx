import ColumnComp from "./ColumnComp";
import PropTypes from "prop-types";

const RowComp = ({id, name, status}) => {
    return  <tr>
                <ColumnComp content={id}/>
                <ColumnComp content={name}/>
                <ColumnComp content={status}/>
            </tr>;
}

RowComp.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.any
};

export default RowComp;