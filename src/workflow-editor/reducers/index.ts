import { Action } from "../actions";
import { IState, initialState } from "../interfaces/state";
import { changeFlagReducer } from "./changeFlagReducer";
import { redoListReducer } from "./redoListReducer";
import { startNodeReducer } from "./startNodeReducer";
import { undoListReducer } from "./undoListReducer";
import { zoomReducer } from "./zoomReducer";

export const mainReducer = (
  { changeFlag, redoList, undoList, startNode, zoom }: IState = initialState,
  action: Action
): IState => ({
  changeFlag: changeFlagReducer(changeFlag, action),
  redoList: redoListReducer(redoList, action),
  undoList: undoListReducer(undoList, action),
  zoom: zoomReducer(zoom, action),
  startNode: startNodeReducer(startNode, action),
});
