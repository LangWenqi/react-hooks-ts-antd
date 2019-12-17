import React, { FunctionComponent, ReactElement, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Connect, { IReduxProps } from './redux';
interface Iprops extends IReduxProps {
	[propName: string]: any;
}
const Index: FunctionComponent<Iprops> = (props: Iprops): ReactElement => {
	const [ num, setNum ] = useState<number>(0);
	const ref = useRef({ refNum: num });

	useEffect(()=>{
		doSetNum();
		console.log(num);
		window.testFuc = () => {};
		return () => {
			window.testFuc = null;
		}
	}, []);

	useEffect(()=>{
		const { refNum }: { refNum: number } = ref.current;
		console.log('refNum', refNum);
	}, []);

	const memoNum =  useMemo(():string => ('[' + num + ']'), [num]);

	const doSetNum = useCallback(():void => {
		setNum(num + 1);
	}, [num]);
	
  return (
		<div onClick={() => props.onDecrement()}>
			propCouter[{props.counter}]
			stateNum{memoNum}
			{ props.children }
		</div>
	);
}

export default Connect(Index);