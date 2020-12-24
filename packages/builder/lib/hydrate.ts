import { createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const hydrate = createAction(HYDRATE);

export default hydrate;
