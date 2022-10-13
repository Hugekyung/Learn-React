# Learn Basic React with TypeScript

https://react.vlpt.us/ 의 강의자료를 기반으로 학습한 내용입니다.

### useEffect

-   컴포넌트가 렌더링될 때마다 특정 작업(비동기로 실행되어야 하는 작업)을 실행할 수 있게 하는 hook.

```js
useEffect(function, deps)
```

-   function : 실행하고자 하는 함수
-   deps : 배열 형태. function을 실행시킬 조건.
-   deps에 특정값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트될 때 useEffect를 실행합니다.
-   deps에 여러 값을 넣을 경우, 여러 값 중 하나라도 변경되는 경우에 렌더링이 새로 이루어지도록 할 수 있다.

-   사용 예시

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
