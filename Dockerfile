FROM node:lts-iron
 
WORKDIR /daniel_lopez_ui_garden_build_checks/
 
COPY public/ /daniel_lopez_ui_garden_build_checks/public
COPY src/ /daniel_lopez_ui_garden_build_checks/src
COPY package.json /daniel_lopez_ui_garden_build_checks/
COPY . /daniel_lopez_ui_garden_build_checks
 
RUN npm install
 
CMD ["npm", "run", "storybook"]