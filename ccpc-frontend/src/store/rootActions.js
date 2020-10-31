import * as productActions from './products/actions';
import { bindActionCreators } from 'redux';

const rootActions = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
}

export default rootActions;