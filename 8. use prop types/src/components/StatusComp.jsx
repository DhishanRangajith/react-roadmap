import PropTypes from "prop-types";

const StatusComp = ({status}) => {

    const statusTxt = status == 1 ? "ACTIVE" : "DEACTIVE";
    const color = status == 1 ? "green" : "red";

    return <label color="red">{status}</label>;

};

StatusComp.propTypes = {
    status: PropTypes.any
};

export default StatusComp;