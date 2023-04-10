import getData from '../lib/getData'
import Table from '../others/Table'

export default function Headlights() {
  const { data, loading, error, mutate } = getData('/headlights')
  if (error) {
    return <div>Error Occured!</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return <Table data={data} mutate={mutate} type='headlights' />
}
