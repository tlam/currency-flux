var React = require('react');
var PropTypes = React.PropTypes;

function FetchCurrency(props) {
  return (
    <div>
      <div>
        <label>Currency:</label>
        <select id='currencies'>
          <option val='EUR'>EUR</option>
          <option val='JPY'>JPY</option>
          <option val='USD'>USD</option>
        </select>
      </div>
      <div>
        <label>Amount:</label><input type='text' name='amount' />
      </div>
      <div>
        <button
          type='button'
          className='btn btn-default'
          onClick={props.onFetch}>
            Fetch
        </button>
      </div>
    </div>
  )
}

FetchCurrency.propTypes = {
  onFetch: PropTypes.func.isRequired
}

module.exports = FetchCurrency;
