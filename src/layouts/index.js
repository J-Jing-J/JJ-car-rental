import styles from './index.css';
import { ErrorBoundary, MenuBar } from '@/components';
import { useLocation } from 'umi'
import { StoreProvider } from 'think-react-store'
import * as store from '../stores'

function BasicLayout(props) {

  const location = useLocation();
  const paths = ['/', '/order', '/user']

  return (
    <StoreProvider store={store}>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {/* 在整个布局文件里监听错误，父组件监听子组件的错误 */}
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default BasicLayout;
