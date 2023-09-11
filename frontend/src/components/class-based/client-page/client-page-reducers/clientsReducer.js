// import { createSlice } from "@reduxjs/toolkit";

// const clientListSlice = createSlice({
//   name: "clients",
//   initialState: {
//     clients: [], // Initial state should contain client data from your API.
//   },
//   reducers: {
//     updatePaymentStatus: (state, action) => {
//       // Update payment status for a specific client
//       const { clientId, newStatus } = action.payload;
//       const clientToUpdate = state.clients.find(
//         (client) => client.id === clientId
//       );
//       if (clientToUpdate) {
//         clientToUpdate.paymentStatus = newStatus;
//       }
//     },
//   },
// });

// export const { updatePaymentStatus } = clientListSlice.actions;
// export default clientListSlice.reducer;

const initialState = {
  clients: [],
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return {
        ...state,
        clients: action.payload,
      };

    case "UPDATE_PAYMENT_STATUS":
      const updatedClients = state.clients.map((client) => {
        if (client.id === action.payload) {
          // Update the paymentStatus property for the selected client
          return {
            ...client,
            paymentStatus: "paid", // Update to 'paid'
          };
        }
        return client;
      });

      return {
        ...state,
        clients: updatedClients,
      };

    default:
      return state;
  }
};
