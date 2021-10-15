FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Dark-Max0/PEARL-PROJECT /root/PEARL-PROJECT
WORKDIR /root/PEARL-PROJECT/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
