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
  // else if (params.pageName === 'login' || params.pageName === 'registration') {
  //   message = 'You Have Already Login'
  //   window.location.href = "/"
  // }

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