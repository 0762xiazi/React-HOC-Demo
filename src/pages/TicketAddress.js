import AddressHOC from '../components/Address/AddressHOC';
import addressApi from '../api/address';
import AddressList from '../components/Address/AddressList';
const defaultProps = {emptyTips: '暂无寄票地址',addressType:'寄票'}

export default AddressHOC({WrappedComponent:AddressList, fetchingMethod:addressApi.fetchCompanyMailAddresses, defaultProps,editClick:addressApi.editClick});
