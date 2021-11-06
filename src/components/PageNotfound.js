import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

const PageNotfound = () => {
  const params = useParams()
  let message = `${params.pageName} PAGE NOT FOUND`

  if (params.pageName === 'user_profile' || params.pageName === 'checkout') {
    message = ''
    window.location.href = "/login"
  }
  return (
    <PageNotFoundContainer>
      <h1>{message}</h1>
    </PageNotFoundContainer>
  )
}

export default PageNotfound

const PageNotFoundContainer = styled.div`
  width: 80%;
  margin:100px auto;
`