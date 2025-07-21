const ReduceComponent = ({list}) => {

    const totalAgeCount = list.reduce( 
        (total, student) => {
            total+=student.age;
            return total;
        }, 
        0
    );

    console.log(totalAgeCount);

    return (
        <div>
           <p>Total age count : {totalAgeCount}</p>
        </div>
    );
};

export default ReduceComponent;