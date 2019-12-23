interface IformLayout {
	labelCol: { span: number };
	wrapperCol: { span: number };
}
interface IformItemLayout {
	labelCol: { 
		xs: { span: number };
		sm: { span: number };
	};
	wrapperCol: { 
		xs: { span: number };
		sm: { span: number };
	};
}

export const formItemInlineLayout: IformLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};

export const modalFormLayout: IformLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};

export const formItemLayout: IformItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  }
};

export const siderWidth: number = 200;

export const theme: { light: 'light'; dark: 'dark' } = {
	light: 'light',
	dark: 'dark'
}

  