import dva from 'dva';
// import "lib-flexible";
import './index.css';
// import { createBrowserHistory as createHistory } from 'history';
// 1. Initialize
const app = dva();

// 2. Plugins
app.use({
  // history: createHistory()
});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
