import getData from '../lib/getData'
import Table from '../others/Table'

export default function Sidelights() {
  const { data, loading, error, mutate } = getData('/sidelights')
  if (error) {
    return <div>Error Occured!</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return <Table data={data} type='sidelights' mutate={mutate} />
}
