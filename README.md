# How to start it
* git clone https://github.com/composer2/Simple-Weather-App.git
* npm install;
* npm start; (note the server is running on PORT 4200 if it's busy it won't start)

# Simple-User-Form

# Task General Description
Предизвикателството е да се направи форма за регистрация, логин, логаут и преглед на профила. Формата трябва да бъде разработена на Angular 2 (моля, погледни прикачените файлове). За изпълнението ѝ има специално вдигнат сървър на IP адрес 18.194.42.165:8080. Очакваме да се направи front-end функционалност за регистриране, вписане,  отписване (логаут) и преглед на профила. За аутентиканцията ще ти е нужно да използваш JWT token.
# Badges to Unlock 
# URL-ите за тези заявки са:

*/contributors/register/: В body-то на POST заявката се очаква email, password1, password2; Полетата username, name и phone_number не са задължителни

*/contributors/login/: В body-то на POST заявката се очаква email and password;

*/contributors/user/: В header-ите на GET заявката се очаква Authorization със стойност JWT <JWT token>