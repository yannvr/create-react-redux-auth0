import React, { Component, PropTypes } from 'react';

export default class TickerSearch extends Component {
    render () {
        const { onChange} = this.props;

        return (
            <div className="center-block col-md-8">
                <input type="text" placeholder="Ticker val.." onKeyUp={e => { if(e.target.value.length > 3) onChange(e.target.value)}} />
            </div>
    );
    }
}

/*TickerSearch.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};*/
