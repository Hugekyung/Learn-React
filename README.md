# Learn Basic React with TypeScript

https://react.vlpt.us/ 의 강의자료를 기반으로 학습한 내용입니다.

<br/>

## `useEffect`

-   컴포넌트가 렌더링될 때마다 특정 작업(비동기로 실행되어야 하는 작업)을 실행할 수 있게 하는 hook.

```js
useEffect(function, deps)
```

-   function : 실행하고자 하는 함수
-   deps : 배열 형태. function을 실행시킬 조건.
-   deps에 특정값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트될 때 useEffect를 실행합니다.
-   deps에 여러 값을 넣을 경우, 여러 값 중 하나라도 변경되는 경우에 렌더링이 새로 이루어지도록 할 수 있다.

### <사용 예시>

```js
useEffect(() => {
    console.log("렌더링 될때마다 실행");
});

useEffect(() => {
    console.log("맨 처음 렌더링될 때 한 번만 실행");
}, []);

useEffect(() => {
    console.log(name);
    console.log("name이라는 값이 업데이트 될 때만 실행");
}, [name]);

const mounted = useRef(false);
useEffect(() => {
    if (!mounted.current) {
        mounted.current = true;
    } else {
        console.log(name);
        console.log("업데이트 될 때마다 실행");
    }
}, [name]);
```

<br/>

## `useMemo`

-   Memo는 메모이제이션의 의미로 렌더링 시마다 반복적으로 수행해야하는 동일한 계산의 동일 값을 메모리에 기억해둘 수 있게 하는 hook.
-   이미 한번 계산했던 값을 렌더링 시마다 새롭게 계산해야할 경우 렌더링 최적화에 있어 불리하다. useMemo를 사용하면 렌더링 최적화에 유리하다.

### <사용예시>

    첫 번째 인자로 콜백함수를 넣어주고, 두번째 deps에는 배열의 형태로 변경을 감지하고자 하는 값을 넣어준다.

```js
const exampleMemo = useMemo(callback, deps);
```
