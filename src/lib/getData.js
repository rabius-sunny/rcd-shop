import useSWR from 'swr'

export default function getData(type) {
  const fetcher = async () => {
    const response = await fetch(
      `https://datacenter.darulislam.foundation/library/shop${type}`
    )
    const parsed = response.json()
    return parsed
  }
  const { data, error, isLoading, mutate } = useSWR(
    `https://datacenter.darulislam.foundation/library/shop${type}`,
    fetcher,
    { revalidate: false }
  )

  return {
    data: data?.response,
    loading: isLoading,
    error,
    mutate
  }
}
