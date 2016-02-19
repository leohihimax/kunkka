require('./style/index.less');

var React = require('react');
var uskin = require('client/uskin/index');
var Table = uskin.Table;

class DetailMinitable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    this.setState({
      toggle: this.props.defaultUnfold
    });
  }

  toggle(e) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {

    return (
      <div className="toggle">
        <div className="toggle-title" onClick={this.toggle}>
          {this.props.title}
          <i className={'glyphicon icon-arrow-' + (this.state.toggle ? 'down' : 'up')} />
        </div>
        <div className={'toggle-content' + (this.state.toggle ? ' unfold' : ' fold')}>
          <div className="halo-com-detail-minitable">
            {this.props.children}
            <div className="table-info">
              <Table
                mini={true}
                column={this.props.tableConfig.column}
                data={this.props.tableConfig.data}
                dataKey={'id'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = DetailMinitable;