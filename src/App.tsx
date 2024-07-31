// import i18next from 'i18next'
// import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next';
// import historyNote from './release/history.json'
// import metadata from './release/metadata.json'
import Router from './router/Router';

import { ConfigProvider, Layout, theme } from 'antd';
import { useEffect } from 'react';
import LoadingTopBar from './components/base/loading/LoadingTopBar';
// import Theme from './components/base/theme/Theme';
import 'antd/dist/reset.css';
import i18n from './i18n';
import { setLanguge } from './reducers/slice/themeLanguageSlice';
import {
  getStore,
  RootState,
  useAppDispatch,
  useAppSelector,
} from './redux/store';
import { serviceConfig } from './services/serviceManager';
import styleModule from './style.module.scss';

const { defaultAlgorithm, darkAlgorithm } = theme;

const { useToken } = theme;

const App = () => {
  const { token } = useToken();

  const themeData = useAppSelector(
    (state: RootState) => state.themeLanguage.theme,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    serviceConfig(getStore());
    dispatch(setLanguge(i18n.resolvedLanguage));
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeData.dark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: themeData.color,
          fontSize: 13,
          sizeStep: 3,
          sizeUnit: 3,
          borderRadius: 3,
          fontFamily: 'Roboto',
        },
      }}
    >
      <I18nextProvider i18n={i18n}>
        <div
          className={styleModule.app}
          style={{ background: token.colorBgBase }}
        >
          <Layout className={styleModule.monitor}>
            <LoadingTopBar />
            <Router />
          </Layout>
        </div>
      </I18nextProvider>
    </ConfigProvider>
  );
};

export default App;
