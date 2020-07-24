class UserInfo {
      constructor({ userNameSelector, userInfoSelector }) {
            this._userName = document.querySelector(userNameSelector);
            this._userInfo = document.querySelector(userInfoSelector);
      }

      // *Можно лучше* Непонятно, зачем в конструкторе _userName и _userInfo если они тут нигде не используются. возможно, нужно отредактировать метод getUserInfo
      getUserInfo() {
            const profileTitle = document.querySelector('.profile__title').textContent;
            const profileDescription = document.querySelector('.profile__description').textContent;
            return { profileTitle, profileDescription }
      }

      setUserInfo(userName, userInfo) {
            document.querySelector('.profile__title').textContent = userName;
            document.querySelector('.profile__description').textContent = userInfo;
      }
      // TODO. might be better with setters and getters ES6
}

export default UserInfo;