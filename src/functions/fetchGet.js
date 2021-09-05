const fetchGet = async (url, setTheState, query) => {
  try {
    const response = await fetch(url + query, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmM3YzJkNTI2MjAwMTViNmRjYWMiLCJpYXQiOjE2MzA2NjM4NTYsImV4cCI6MTYzMTg3MzQ1Nn0.j9edog2e-u1rvxI3B4QWsTq_YvJ4Tkxk5VltxfWh3CY",
      },
    })
    if (response.ok) {
      const fetchedContent = await response.json()
      setTheState({
        data: fetchedContent.data ? fetchedContent.data : fetchedContent,
        loading: false,
        error: false,
      })
    } else {
      setTheState({
        data: [],
        loading: false,
        error: true,
      })
    }
  } catch (error) {
    setTheState({
      data: [],
      loading: false,
      error: true,
    })
  }
}

export default fetchGet
