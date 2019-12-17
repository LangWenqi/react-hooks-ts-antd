import history from '@/history/history';
import { qs } from '@/utils/object';
import { historyParams } from '@/config/typings';
const reactRouter = history;
type reactRouter = typeof history;

reactRouter.navigateTo = function (obj: historyParams) {
    const searchQuery = `${qs.stringify(obj.query, true)}`;
    const search = searchQuery ? `?${searchQuery}` : '';
    const newObj = {...obj,search:search};
    reactRouter.push(newObj);
};
reactRouter.redirectTo = function (obj: historyParams) {
    const searchQuery = `${qs.stringify(obj.query,true)}`;
    const search = searchQuery ? `?searchQuery` : '';
    const newObj = {...obj,search:search};
    reactRouter.replace(newObj);
};
reactRouter.getQuery = function () {
		const search = history.location.search;
		const searchStr = search ? search.split('?')[1]:'';
		return qs.parse(searchStr,true);
};
export default reactRouter;
