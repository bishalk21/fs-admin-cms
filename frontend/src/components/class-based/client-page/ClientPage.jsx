// src/ClientTable.js
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchClients,
  updatePaymentStatus,
} from "./client-page-reducers/paymentAction";

class ClientPage extends Component {
  componentDidMount() {
    // Fetch clients when the component mounts
    this.props.fetchClients();
  }

  handlePaymentUpdate = (clientId) => {
    // Dispatch the updatePaymentStatus action with the client ID
    this.props.updatePaymentStatus(clientId);
  };

  render() {
    const { clients } = this.props;

    return (
      <div>
        <h1>Clients</h1>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              {client.name} - Payment Status: {client.paymentStatus}
              <button
                onClick={() => this.handlePaymentUpdate(client.id)}
                className=""
              >
                Mark as Paid
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clients: state.payment.clients,
});

const mapDispatchToProps = {
  fetchClients,
  updatePaymentStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);
