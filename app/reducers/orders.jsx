import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_ORDERS';
const CREATE     = 'CREATE_ORDER';
const UPDATE     = 'UPDATE_ORDER';
const REMOVE     = 'REMOVE_ORDER';

/* ------------   ACTION CREATORS     ------------------ */

const init   = orders => ({ type: INITIALIZE, orders });
const create = order   => ({ type: CREATE, order });
const remove = id      => ({ type: REMOVE, id });
const update = order   => ({ type: UPDATE, order });

/* ------------       REDUCERS     ------------------ */

export default function reducer (orders = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.orders;

    case CREATE:
      return [action.order, ...orders];

    case REMOVE:
      return orders.filter(order => order.id !== action.id);

    case REMOVE_USER:
      return orders.filter(order => order.author_id !== action.id);

    case UPDATE:
      return orders.map(order => (
        action.order.id === order.id ? action.order : order
      ));

    default:
      return orders;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchOrders = () => dispatch => {
  axios.get('/api/orders')
       .then(res => dispatch(init(res.data)))
       .catch(err => console.error('Fetching orders unsuccessful', err));
};

export const fetchOrder = (id) => dispatch => {
  axios.get(`/api/orders/${id}`)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error('Fetching order unsuccessful', err));
};

// optimistic
export const removeOrder = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/orders/${id}`)
       .catch(err => console.error(`Removing order: ${id} unsuccessful`, err));
};

export const addOrder = order => dispatch => {
  axios.post('/api/orders', order)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating order: ${order} unsuccessful`, err));
};

export const updateOrder = (id, order) => dispatch => {
  axios.put(`/api/orders/${id}`, order)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating order: ${order} unsuccessful`, err));
};