import React, { useState, useMemo, useCallback, useRef } from 'react'

const getAverage = (numbers) => {
  console.log('평균값 계산 중..')
  if (numbers.length === 0) return 0

  const sum = numbers.reduce((a, b) => a + b)
  return sum / numbers.length
}

const Average = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')
  const inputEl = useRef(null)

  const onChange = useCallback((e) => {
    setNumber(e.target.value)
  }, []) // 컴포넌트가 처음 렌더링될 때만 함수 생성
  //onChange처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 단 한 번만 함수가 생성되며,
  //onInsert처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때마다 함수가 생성됩니다.

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber('')
    inputEl.current.focus()
    // useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킵니다.
  }, [number, list]) // number 혹은 list가 바뀌었을 때만 함수 생성
  // useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 됩니다.
  // 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 합니다.

  const avg = useMemo(() => getAverage(list), [list])
  // 숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를 사용하고,
  // 함수를 재사용하려면 useCallback을 사용하세요.

  //   useCallback(() => {
  //     console.log('hello world!');
  //   }, [])

  //   useMemo(() => {
  //     const fn = () => {
  //       console.log('hello world!');
  //     };
  //     return fn;
  //   }, [])

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  )
}

export default Average
