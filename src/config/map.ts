import moment from 'moment';

// 时间
interface ImapArrApplyTime {
	name: string;
	key: string | number;
	value: string []
}
export const mapArrApplyTime: ImapArrApplyTime[] = [
  {
    name:'不限',
    key: '0',
    value: []
  },
  {
    name:'本周',
    key: '1',
    value: [moment().startOf('week').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
  },
  {
    name:'本月',
    key: '2',
    value:[moment().startOf('month').format('YYYY-MM-DD'),  moment().format('YYYY-MM-DD')]
  },
  {
    name:'近三个月',
    key: '3',
    value: [moment().subtract(3, 'month').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
  },
  {
    name:'近半年',
    key: '4',
    value: [moment().subtract(6, 'month').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
  },
  {
    name:'今年',
    key: '5',
    value: [moment().startOf('year').startOf('month').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
  }
];

