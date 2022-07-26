import useData from './useData';
import Details from '../Details';
import Filter from './Filter';

import { Wrapper, Arrow } from './styles';

const List = ({data}) => {
    const {
        res,
        order,
        orderField,
        handleSort,
        handleFilterGender,
        handleShowDetails,
        toggleState,
        genders,
        handleFilterName,
    } = useData(data);
    
    const listHead = [{
        id: 'name',
        name: 'Name',
        cb: () => handleSort('name'),
    }, {
        id: 'gender',
        name: 'Gender',
        cb: () => handleSort('gender'),
    }, {
        id: 'height',
        name: 'Height',
        cb: () => handleSort('height'),
    }];
    return <Wrapper>
            <div className="head">
                {listHead.map(el => (
                    <div className={el.id} key={el.id} onClick={el.cb}>
                        {el.name}
                        { orderField === el.id && <Arrow asc={order} />}
                    </div>
                ))}
            </div>
            <Filter
                handleFilterName={handleFilterName}
                handleFilterGender={handleFilterGender}
                genders={genders}
            />
            {
                Object.values(res).map((el, i) => {
                    const additionalClass = toggleState
                        ? toggleState === el.url ? 'active' : 'inactive' 
                        : '';
                    return (<div className={`item ${additionalClass}`} key={i} onClick={() => handleShowDetails(el.url)}>
                    <div className="name">{el.name}</div>
                    <div className="gender">{el.gender}</div>
                    <div className="height">{el.height}</div>
                    {toggleState === el.url && <Details item={el}/>}
                </div>);
                })
            }
    </Wrapper>
};

export default List;