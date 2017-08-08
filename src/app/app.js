/* root component starts here */


import Report from "./pages/reports/index";
import TaskList from "./pages/tasks-list/index";
import Settings from "./pages/settings/index";
import HeaderIndex from "./components/header/index";


const header=new HeaderIndex();
const taskList=new TaskList();
const settings=new Settings();
const report=new Report();



require('./components/tomato-settings/cycle');

require('../assets/less/main.less'); // include general styles



// /* example of including header component */
// require('./components/header/header');
//


