import React from 'react';
import coinbase_logo from './coinbase.svg'
import {Form,Input,Button,Select} from 'antd';

const { Option } = Select;


class coinbase extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			load: true,
			brokers: {}
		}
	}

	componentDidMount(){
		this.props.updateKey('6')
	}

	render(){
		return(
			<div className="brokers_section">
				<div className="submit-broker">
					<div className="account_form">
						<Form layout="horizontal">
						  <Form.Item>
						    <Select defaultValue="Coinbase" >
	                 <Option value="Coinbase">Coinbase</Option>
	               </Select>
						  </Form.Item>
						  <Form.Item>
						    <Input placeholder="API Key" />
						  </Form.Item>

						  <Form.Item>
						    <Input placeholder="API Secret" />
						  </Form.Item>

						  <Form.Item>
						    <Input placeholder="API Passphrase" />
						  </Form.Item>

						  <Form.Item>
						    <Button type="primary">Submit account</Button>
						  </Form.Item>
						</Form>
					</div>

					<h3>Supported Brokers</h3>
					<div className="logo-box">
						<img src={coinbase_logo}/>
					</div>
				</div>
				<div className="broker_accounts">
					<h1>Broker Accounts</h1>
					<p>Fix state loading requests.</p>
				</div>
			</div>
		)
	}
}

export default coinbase;
