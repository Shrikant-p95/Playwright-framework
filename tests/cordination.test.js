import { CoordPage } from '../Pages/coord.po';
import { basicdetails } from '../utils/helpers';

export default{
 async abc (orderName, page) {
    const coordPage = new CoordPage(page);
    await coordPage.coord(orderName);
    const dateHelper = new basicdetails(page);
    await dateHelper.dateselector('coord',5);
    await dateHelper.dateselector('onsite',2,5);
    await coordPage.ordercreate();
  }
}