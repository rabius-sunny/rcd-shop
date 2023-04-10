import getData from '../lib/getData'
import Table from '../others/Table'

export default function Foglights() {
  const { data, loading, error, mutate } = getData('/foglights')
  if (error) {
    return <div>Error Occured!</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return <Table data={data} type='foglights' mutate={mutate} />
}
