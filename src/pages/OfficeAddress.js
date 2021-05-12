import AddressHOC from '../components/Address/AddressHOC';
import addressApi from '../api/address';
import AddressList from '../components/Address/AddressList';
const defaultProps = {emptyTips: '暂无办公地址',addressType:'办公'}

export default AddressHOC({WrappedComponent:AddressList, fetchingMethod:addressApi.fetchTypeAddresses, defaultProps,editClick:addressApi.editClick});
