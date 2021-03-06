import EmployersListItem from '../employers-list-item/employers-list-item'; 

import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleIncreace, onToggleRise}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
            key={id}
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleIncreace={() => onToggleIncreace(id)}
            onToggleRise={() => onToggleRise(id)}/>
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;