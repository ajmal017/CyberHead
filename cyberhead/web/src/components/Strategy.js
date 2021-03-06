import React from 'react';
import API_BASE from '../actions/URL'
import { Card, Col, Row, Switch, Select, Button } from 'antd';
import {getStrategy} from '../actions/strategies'
const { Option } = Select;

class Strategy extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loaded: false,
			strategyData: []
		}
	}

	componentDidMount(){
		getStrategy(this.props.match.params.strategy_name)
			.then(response => this.setState({strategyData: response.strategy[0]}))
		this.setState({loaded: true})
	}

	render(){
		return(
			<React.Fragment>
				<h1 style={{ color: '#ffffff'}}>Strategy : {this.props.match.params.strategy_name}</h1>
				{this.state.loaded &&
				<div style={{ padding: '10px' }}>
						<div className="live-options">
							<h3>Live Options</h3>
							<div className="live-options-inputs">
								<Switch checkedChildren="Live" unCheckedChildren="Test" style={{ marginRight: '5px', width: 70 }} />
								<Select defaultValue="D1" style={{ width: 200, marginLeft: '10px' }}>
								  <Option value="D1">D1</Option>
								  <Option value="D2">D2</Option>
								  <Option value="D3">D3</Option>
								</Select>

								<Select defaultValue="Alpaca" style={{ width: 200, marginLeft: '10px' }}>
								  <Option value="ALPACA">Alpaca</Option>
								  <Option value="COINBASE">Coinbase</Option>
								</Select>

								<Button type="primary" style={{marginLeft: '5px'}}>Save</Button>
							</div>
						</div>
				    <Row>
				      <Col md={6} style={{marginRight: '1em'}}>
				        <Card title="Last Perform" bordered={false}>
				        	<p className="label-ratios">Start</p>
				          <p>{this.state.strategyData.start}</p>
				          <p className="label-ratios">End</p>
				          <p>{this.state.strategyData.end}</p>
				          <p className="label-ratios">Duration</p>
				          <p>{this.state.strategyData.duration}</p>
				          <p className="label-ratios">Exposure</p>
				          <p>{this.state.strategyData.exposure}</p>
				          <p className="label-ratios">Equity Final</p>
				          <p>{this.state.strategyData.equity_final}</p>
				          <p className="label-ratios">Equity Peak</p>
				          <p>{this.state.strategyData.equity_peak}</p>
				          <p className="label-ratios">Return</p>
				          <p>{this.state.strategyData.strategy_return}</p>
				          <p className="label-ratios">Buy & Hold Return</p>
				          <p>{this.state.strategyData.buy_hold_return}</p>
				          <p className="label-ratios">Max. Drawdown</p>
				          <p>{this.state.strategyData.max_drawdown}</p>
				          <p className="label-ratios">Avg. Drawdown</p>
				          <p>{this.state.strategyData.avg_drawdown}</p>
				          <p className="label-ratios">Max. Avg. Drawdown.</p>
				          <p>{this.state.strategyData.max_drawdown_duration}</p>
				          <p className="label-ratios">Avg. Drawdown Duration</p>
				          <p>{this.state.strategyData.avg_drawdown_duration}</p>
				          <p className="label-ratios">Trades</p>
				          <p>{this.state.strategyData.trades}</p>
				          <p className="label-ratios">Win Rate</p>
				          <p>{this.state.strategyData.win_rate}</p>
				          <p className="label-ratios">Best Trade</p>
				          <p>{this.state.strategyData.best_trade}</p>
				          <p className="label-ratios">Worst Trade</p>
				          <p>{this.state.strategyData.worst_trade}</p>
				          <p className="label-ratios">Avg. Trade</p>
				          <p>{this.state.strategyData.avg_trade}</p>
				          <p className="label-ratios">Max. Trade Duration</p>
				          <p>{this.state.strategyData.max_trade_duration}</p>
				          <p className="label-ratios">Avg. Trade Duration</p>
				          <p>{this.state.strategyData.avg_trade_duration}</p>
				          <p className="label-ratios">Expectancy</p>
				          <p>{this.state.strategyData.expectancy}</p>
				          <p className="label-ratios">SQN</p>
				          <p>{this.state.strategyData.sqn}</p>
				          <p className="label-ratios">Sharpe</p>
				          <p>{this.state.strategyData.sharpe_ratio}</p>
				          <p className="label-ratios">Sortino Ratio</p>
				          <p>{this.state.strategyData.sortino_ratio}</p>
				          <p className="label-ratios">Calmar Ratio</p>
				          <p>{this.state.strategyData.calmar_ratio}</p>
				        </Card>
				      </Col>
				      <Col md={8}>
				      <iframe src={`${API_BASE}/get_plot/${this.state.strategyData.plot_path}`} width="750px" height="710" frameBorder="0" title="iframe strategy_return"></iframe>
				    	</Col>
				    </Row>
				  </div>
				}
			</React.Fragment>
		)
	}
}

export default Strategy;