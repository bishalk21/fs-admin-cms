import { mockClients } from "../mockData";

export const fetchClients = () => ({
  type: "FETCH_CLIENTS",
  payload: mockClients, // mockClients is the data you provided
});

export const updatePaymentStatus = (clientId) => ({
  type: "UPDATE_PAYMENT_STATUS",
  payload: clientId,
});
