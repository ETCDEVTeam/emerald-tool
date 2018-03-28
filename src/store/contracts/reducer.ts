import { Record } from 'immutable';
import { ContractsAction } from './actions';

type Contract = {
  address: string;
  txHash: string;
};

type StateParams = {
  contracts: Array<Contract>;
  loading: boolean;
};

const defaultValues: StateParams = {
  contracts: [],
  loading: false,
};

export class State extends Record(defaultValues) {
  contracts: Array<Contract>;
  loading: boolean;

  constructor() {
    super(defaultValues);
  }
}

const initialState = new State();

// const initialContract = Map({
//   address: null,
//   name: null,
//   abi: null,
//   version: null,
//   options: [],
//   txhash: null,
// });

// function addContract(state: State, address, name, abi, version, options, txhash) {
//   return state.update('contracts', (contracts) =>
//     contracts.push(initialContract.merge({ address, name, abi, version, options, txhash }))
//   );
// }

// function onLoading(state: State, action) {
//   switch (action.type) {
//     case 'CONTRACT/LOADING':
//       return state
//         .set('loading', true);
//     default:
//       return state;
//   }
// }

// function onSetContractList(state: State, action) {
//   switch (action.type) {
//     case 'CONTRACT/SET_LIST':
//       return state
//         .set('contracts', fromJS(action.contracts || []))
//         .set('loading', false);
//     default:
//       return state;
//   }
// }

// function onAddContract(state: State, action) {
//   if (action.type === 'CONTRACT/ADD_CONTRACT') {
//     return addContract(state,
//       action.address,
//       action.name,
//       action.abi,
//       action.version,
//       action.options,
//       action.txhash);
//   }
//   return state;
// }

// function updateContract(state: State, txhash: string, f) {
//   return state.update('contracts', (contracts) => {
//     const pos = contracts.findKey((contract: Map<string, any>) => contract.get('txhash') === txhash);
//     if (pos >= 0) {
//       return contracts.update(pos, f);
//     }
//     return contracts;
//   });
// }

// function onUpdateContract(state: State, action) {
//   if (action.type === 'CONTRACT/UPDATE_CONTRACT') {
//     return updateContract(state, action.tx.hash, (contract) =>
//       contract.set('address', action.address)
//     );
//   }
//   return state;
// }

export default function reduce(state: State, action: ContractsAction) {
  state = state || initialState;
  // state = onLoading(state, action);
  // state = onSetContractList(state, action);
  // state = onAddContract(state, action);
  // state = onUpdateContract(state, action);
  return state;
}
