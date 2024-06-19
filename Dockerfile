FROM node:lts-iron
 
WORKDIR /daniel_lopez_ui_garden/
 
COPY public/ /daniel_lopez_ui_garden/public
COPY src/ /daniel_lopez_ui_garden/src
COPY package.json /daniel_lopez_ui_garden/
COPY . /daniel_lopez_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]