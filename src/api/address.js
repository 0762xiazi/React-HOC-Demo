import {get} from '../util/request'
import '../mock/addressData'

function fetchCompanyAddresses() {
 // eslint-disable-next-line
 return get('/api/address/companyAddresses')
}

function fetchCompanyMailAddresses() {
 // eslint-disable-next-line
 return get(`/api/address/companyMailAddresses`)
}

function fetchTypeAddresses() {
 // eslint-disable-next-line
 return get(`/api/address/typeAddresses`)
}

function editClick(item) {
  console.log('editClick',item)
}
// eslint-disable-next-line
export default {
 fetchCompanyAddresses,
 fetchCompanyMailAddresses,
 fetchTypeAddresses,
 editClick
}
