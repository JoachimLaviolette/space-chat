import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, ChatPage, DocsPage, RoomPage } from "./Pages";
import { URLS } from "../Utils";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={URLS.HOME_PAGE} exact component={HomePage} />
        <Route path={URLS.CHAT_PAGE} exact component={ChatPage} />
        <Route path={URLS.DOCS_PAGE} exact component={DocsPage} />
        <Route path={URLS.ROOM_PAGE} exact component={RoomPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
