// 提交 mutations是更改Vuex状态的唯一合法方法
export const saveAdminInfo = (state, adminInfo) => {
  state.token = adminInfo
}
