import PropTypes from 'prop-types'
import Button from './Button'

function Header({title, onAdd, showAdd}) {
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button color={showAdd? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//css in js
// const headingStyle = {
//     textAlign: 'center',
//     color: 'lime',
//     backgroundColor: '#222',
//     padding: '10px'
// }

export default Header
