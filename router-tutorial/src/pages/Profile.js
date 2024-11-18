import React from 'react'
import { useParams } from 'react-router-dom'

const data = {
  minsu: {
    name: "민수",
    message: "Hello"
  },
  gildong: {
    name: "길동",
    message: "Bye"
  }
}

const Profile = () => {
  //url 파라미터를 사용하기 위한 훅
  const params = useParams()
  //useParams훅을 이용해 data객체에 들어있는 정보를 profile에 담아줍니다.
  let profile = data[params.username]

  return (
    <div>
      <h1>User Profile</h1>
      {/* profile 값이 있음녀 표시하고 없으면 '존재하지 않는 프로필 입니다.' 를 사용자에게 보여줍니다.*/}
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.message}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  )
}

export default Profile