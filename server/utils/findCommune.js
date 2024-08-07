import _ from 'lodash'

export default defineCachedFunction(async (query) => {
  const communes = await useStorage('assets:server').getItem(`/referentiels/communes.json`)
  return _.find(communes, query)
}, {
  name: 'findCommune',
  maxAge: 60 * 60
})
