function renderApp (newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return
  console.log('render app...')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return
  const titleDOM = document.getElementById('title')
  console.log('render title...')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent = {}) {
  if (newContent === oldContent) return
  const contentDOM = document.getElementById('content')
  console.log('render content...')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

function reducer (state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }

  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}

function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState  = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch({}) // 初始化 state
  return {getState, dispatch, subscribe}
}

const store = createStore(reducer)
let oldState = store.getState()
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState
})


renderApp(store.getState())
store.dispatch({ type:'UPDATE_TITLE_TEXT', text: '梦伴' })
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
