/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
// 解决window设置属性报错
interface Window {
	[key: string]: any;

}
// 可不写因为接口会合并
// declare var window:	Window;
// 解决document设置属性报错
interface Document {
	[key: string]: any;
}
// 可不写因为接口会合并
// declare var document:	Document;

// 通过命名空间合并解决html添加属性编译报错，vscode中还是会提示错误
declare namespace React {
	interface HTMLAttributes<T> {
		flex?: any;
		['flex-box']?: any;
		['flex-wrap']?: any;
	}
}

// 在tsx文件中做如下处理可解决（vscode中不会提示错误，但繁琐，需要每个页面添加），必须在页面不是其他外部文件，否则引入的react模块变为此模块报错
/*declare module 'react' {
     interface HTMLProps<T> {
        flex?: any;
				['flex-box']?: any;
				['flex-wrap']?: any;
    }
}*/