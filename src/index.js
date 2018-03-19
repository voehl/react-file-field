import React from 'react';
import PropTypes from 'prop-types';

const FileField = props => {
    let input;
    return (
        <div style={{display: 'inline-block'}}>
            <input
                type='file'
                onChange={e => props.onChange(e.target.files)}
                style={{display: 'none'}}
                ref={element => input = element}/>
            {React.cloneElement(props.children, {onClick: () => input.click()})}
        </div>
    );
};

export default FileField;

FileField.propTypes = {
    onChange: PropTypes.func.isRequired
};