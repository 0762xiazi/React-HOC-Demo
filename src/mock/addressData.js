import Mock from 'mockjs'

const companyMailAddresses = Mock.mock({
  'data|1-10':[
    {
      'id|1-100': 200,
      companyId: 515822,
      isDefault: 1,
      name: "川普",
      phone: "16611111111",
      province: "44",
      city: "4401",
      countyArea: "440106",
      townStreet: "",
      address: '@cparagraph',
      areaCode: "440106",
      postCode: null,
      createdAt: 1618834927000,
      updatedAt: 1619078868000,
      createdBy: 0,
      updatedBy: 17108
    }
  ]
})
Mock.mock('/api/address/companyMailAddresses','get',function () { return companyMailAddresses})
const companyAddresses = Mock.mock({
  'data|1-10':[
    {
      'id|1-100': 200,
      companyId: 515822,
      isDefault: 1,
      name: "川普",
      phone: "16611111111",
      province: "44",
      city: "4401",
      countyArea: "440106",
      townStreet: "",
      address: '@cparagraph',
      areaCode: "440106",
      postCode: null,
      createdAt: 1618834927000,
      updatedAt: 1619078868000,
      createdBy: 0,
      updatedBy: 17108
    }
  ]
})
Mock.mock('/api/address/companyAddresses','get',function () { return companyAddresses})
const typeAddresses = Mock.mock({
  'data|1-10':[
    {
      'id|1-100': 200,
      companyId: 515822,
      isDefault: 1,
      name: "川普",
      phone: "16611111111",
      province: "44",
      city: "4401",
      countyArea: "440106",
      townStreet: "",
      address: '@cparagraph',
      areaCode: "440106",
      postCode: null,
      createdAt: 1618834927000,
      updatedAt: 1619078868000,
      createdBy: 0,
      updatedBy: 17108
    }
  ]
})
Mock.mock('/api/address/typeAddresses','get',function () { return typeAddresses})
