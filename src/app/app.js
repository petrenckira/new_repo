/* root component starts here */


import Report from "./pages/reports/index";
import AddTask from "./pages/add-task/index";
import TaskList from "./pages/tasks-list/index";
import Settings from "./pages/settings/index";
import HeaderIndex from "./components/header/index";
import Timer from "./pages/timer/index";



const header=new HeaderIndex();
const taskList=new TaskList();
const settings=new Settings();
const report=new Report();
const addTask=new AddTask();
const timer=new Timer();
// console.log($('body'));

require('./components/tomato-settings/cycle');

require('../assets/less/main.less'); // include general styles



// /* example of including header component */
// require('./components/header/header');
//


