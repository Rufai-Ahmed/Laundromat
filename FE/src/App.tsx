import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./global/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

document.title = "Homescreen";

function App() {
  let persistore = persistStore(store);
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <RouterProvider router={Router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
