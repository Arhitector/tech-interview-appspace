const List = ({
    handleFilterName,
    handleFilterGender,
    genders,
}) => {

    return (<div className="head">
                <div className="name">
                    <input
                        type="text"
                        id="filterName"
                        className="filterName"
                        name="filterName"
                        onChange={handleFilterName}
                    />
                </div>
                <div className="gender">
                <select id="changeGender" className="filterName" name="select" onChange={handleFilterGender}>
                    <option value="default">default</option>
                    {
                        genders.map(el => <option key={el} value={el}>{el}</option>)
                    }
                </select>
                </div>
                <div className="height"></div>
            </div>);
};

export default List;