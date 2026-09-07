import { CoordPage } from '../Pages/coord.po';
import { basicdetails } from '../utils/helpers';



export default{
 async abc (orderName, page) {
    const coordPage = new CoordPage(page);
    await coordPage.coord(orderName);
    const dateHelper = new basicdetails(page);
    await dateHelper.cordiate();
    await dateHelper.onsitedate();

    return coordPage;
  }
}