const SET_INDICATE_FLOAT_POSITION = 'SET_INDICATE_FLOAT_POSITION';
const TOGGLE_BUFF = 'TOGGLE_BUFF';

const START_FISHING = 'START_FISHING';
const CAST_A_FISHING_ROD = 'CAST_A_FISHING_ROD';
const HOOK_FISH = 'HOOK_FISH';

export function setIndicateFloatPosition({ x, y }) {
  return {
    type: SET_INDICATE_FLOAT_POSITION,
    payload: { x, y }
  };
}

const fishingStatus = {
  stop: 'stop',
  expectation: 'expectation',
  hook: 'hook'
};

const initState = {
  floatPosition: {
    x: null,
    y: null
  },
  isUseBuffEnhancements: false,
  fishingStatus: 'stop'
};

export default function lostArkFishing(state = initState, action) {
  switch (action.type) {
    case SET_INDICATE_FLOAT_POSITION:
      return {
        ...state,
        floatPosition: {
          x: action.payload.x,
          y: action.payload.y
        }
      };
    case TOGGLE_BUFF:
      return {
        ...state,
        isUseBuffEnhancements: !state.isUseBuffEnhancements
      };
    default:
      return state;
  }
}
