import getData from '../lib/getData'
import Table from '../others/Table'

export default function Backlights() {
  const { data, loading, error, mutate } = getData('/backlights')
  if (error) {
    return <div>Error Occured!</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return <Table data={data} type='backlights' mutate={mutate} />
}
