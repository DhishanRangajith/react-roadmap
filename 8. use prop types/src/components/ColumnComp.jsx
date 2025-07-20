import PropTypes from "prop-types";

const ColumnComp = ({content}) => {
    return <td>{content}</td>;
}

ColumnComp.propTypes = {
    content: PropTypes.any
};

export default ColumnComp;//