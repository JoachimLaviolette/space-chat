import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, ChatPage, DocsPage } from "./Pages";
import { URLS } from "../Utils";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={URLS.HOME_PAGE} exact component={HomePage} />
        <Route path={URLS.CHAT_PAGE} exact component={ChatPage} />
        <Route path={URLS.DOCS_PAGE} exact component={DocsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
