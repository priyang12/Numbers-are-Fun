import { useRegisterSW } from "virtual:pwa-register/react";
import Styles from "./Styles/ReloadPrompt.module.css";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className={Styles.container}>
      {(offlineReady || needRefresh) && (
        <div className={Styles.toast}>
          <div className={Styles.message}>
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          {needRefresh && (
            <button
              className={Styles.button}
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </button>
          )}
          <button className={Styles.button} onClick={() => close()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;
