import _ from 'lodash'

export default defineCachedFunction(async (query) => {
  const groupements = await useStorage('assets:server').getItem(`/referentiels/groupements.json`)
  return _.filter(groupements, query)
}, {
  maxAge: 60 * 60
})
