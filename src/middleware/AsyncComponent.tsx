import React, { Component, ComponentClass,  FunctionComponent } from 'react';
// import React, { useState, useEffect } from "react";
// import history from '@/history';
/*type ComponentType = ComponentClass | FunctionComponent*/
import { Icomponent } from '@/config/typings';
interface Iprops  {
	[propName: string]: any;
};

interface Istate  {
	component: FunctionComponent | null;
	[propName: string]: any;
};

export default function asyncComponent(importComponent: () => Promise<Icomponent>, loading:boolean = true): ComponentClass<Iprops> {
  class AsyncComponent extends Component<Iprops, Istate> {
		state: Istate = {
			component: null
		}
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

// export default function asyncComponent(importComponent: () => Promise<Icomponent>, loading:boolean = true): FunctionComponent {
// 	const AsyncComponent: FunctionComponent = (props: Iprops): ReactElement | null => {
// 		const [C, setC] = useState<FunctionComponent | null>(null);
// 		useEffect((): void => {
// 			initFuc();
//   	}, []);
// 		const initFuc = async () => {
// 			const { default: component } =  await importComponent();
// 			setC(component);
// 			console.log(222,component)
// 		} 
// 		return ( <div>{JSON.stringify(C)}</div>); 
// 		// return (C ? <C {...props}/> : null); 
// 	}
//   return AsyncComponent;
// }