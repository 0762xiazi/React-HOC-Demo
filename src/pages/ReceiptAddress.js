import AddressHOC from '../components/Address/AddressHOC';
import addressApi from '../api/address';
import AddressList from '../components/Address/AddressList';
const defaultProps = {emptyTips: '暂无收货地址',addressType:'收货'}

export default AddressHOC({WrappedComponent:AddressList, fetchingMethod:addressApi.fetchCompanyAddresses, defaultProps,editClick:addressApi.editClick});
