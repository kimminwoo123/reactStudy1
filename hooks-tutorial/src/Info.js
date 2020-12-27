import React from 'react'
import useInputs from './useInputs'

// useEffect(() => {
//   console.log('effect')
//   console.log(name)
//   return () => {
//     console.log('cleanup')
//     console.log(name)
//   }
// }, [])
// useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다.
// 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야 합니다.

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  })
  const { name, nickname } = state

  return (
    <div>
      <div>
        <input name='name' value={name} onChange={onChange} />
        <br />
        <input name='nickname' value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info
